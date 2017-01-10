var Code = require("mongoose").model("Code");
var User = require("mongoose").model("User");
var Result = require("mongoose").model("Result");
var Tester = require('../challenges/tests/tester');
var fs = require('fs');

let _challenges = {}

exports.init = function (challenges) {
  challenges.forEach(challenge => {
    _challenges[challenge.name] = challenge;
  });
}

exports.saveCode = function *() {
  let user = this.passport.user;
  let code = this.request.body.code;
  code.cip = user.data.cip;
  user.data.language = code.language;
  yield User.update({cip: user.cip}, user);
  let resp = yield Code.save(code);
  if (resp.ok) {
    this.body = { code: code };
    this.status = 200;
  } else {
    this.body = { error: resp };
    this.status = 500;
  }
};

exports.getChallengeCodes = function *() {
  if (!this.query.challenge) {
    this.status = 400;
    this.body = {error: 'Specify a challenge'};
  }

  let user = this.passport.user;
  let codes = yield Code.getChallenge(user.data.cip, this.query.challenge);
  this.body = {codes: codes};
}

exports.submit = function *() {
  let user = this.passport.user;
  let code = this.request.body;
  let cip = user.data.cip;
  let deleteResp = yield Result.remove({challenge: code.challenge, cip: cip});
  let fileExtension = code.language === 'python' ? '.py' : '.js';
  user.language = code.language;
  yield User.update({cip: user.cip}, user);
  let bin = code.language === 'python' ? 'python' : 'node';
  fs.writeFileSync(`${__dirname}/../challenges/codes/${cip}${fileExtension}`, code.code);
  var tester = new Tester(`${__dirname}/../challenges/codes/${cip}${fileExtension}`, bin);
  tester.setTest(require(`${__dirname}/../challenges/tests/${code.challenge}.js`));
  let result = tester.run();
  result.cip = cip;
  result.challenge = code.challenge;
  result.points = _challenges[code.challenge].points * result.percent;
  let resp = yield Result.save(result);
  if (resp.ok) {
    this.status = 200;
  } else {
    this.body = { error: resp };
    this.status = 500;
  }
}