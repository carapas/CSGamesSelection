var User = require("mongoose").model("User");

exports.readAll = function *() {
  var users = yield User.find({}).sort("-meta.isAdmin data.cip").exec();
  this.body = { users: users };
};

exports.getCurrentUser = function *() {
  let user = this.passport.user;
  user.data.hasPassword = user.hasPassword();
  this.body = { user };
};

exports.makeAdmin = function *() {
  const { id } = this.params;
  let user = yield User.findById(id).exec();
  if (!user) {
    this.throw("L'usager n'existe pas", 404);
  }
  user.meta.isAdmin = true;
  yield user.save();

  this.body = { user };
};