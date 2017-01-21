var User = require("mongoose").model("User");
var Result = require("mongoose").model("Result");

exports.readAll = function *() {
  let result = [];
  var users = yield User.find({}).sort("-meta.isAdmin data.cip").exec();
  let usersObj = {};
  for (let user of users) {
    usersObj[user.data.cip] = user;
  }

  let points = yield Result.getUsersPoints().exec();
  for (let point of points) {
    if(usersObj[point._id]) {
      usersObj[point._id].data.totalPoints = point.points;
      result.push(usersObj[point._id]);
    }
  }

  this.body = { users: result };
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
