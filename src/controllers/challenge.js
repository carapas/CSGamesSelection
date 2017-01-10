var fs = require('fs');
var Result = require("mongoose").model("Result");
var _ = require('lodash');

let challenges = [];

exports.init = function(callback) {
  let path = `${__dirname}/../challenges/descriptions`;
  fs.readdir(path, function(err, files) {
    for (var file of files) {
      let name = file.split('.')[0];
      let challengeConfig = require(`../challenges/tests/${name}.js`);
      challenges.push({name: name, content: fs.readFileSync(`${path}/${file}`, 'utf8'), points: challengeConfig.points, category: challengeConfig.category, isCodingChallenge: challengeConfig.isCodingChallenge, python: challengeConfig.python, javascript: challengeConfig.javascript});
    }
    callback(challenges);
  });
}

exports.getAll = function *() {
  let cip = this.passport.user.data.cip;
  let result = yield Result.findOne({cip: cip, challenge: 'tutoriel'});
  if (result && result.points) {
    this.body = {challenges: challenges};
  } else {
    var idx = _.findIndex(challenges, {name: 'tutoriel'});
    this.body = {challenges: [challenges[idx]]};
  }

  this.status = 200;
};

exports.getResult = function *() {
  let cip = this.passport.user.data.cip;
  let challenge = this.params.challenge;
  let result = yield Result.findOne({cip: cip, challenge: challenge});
  if (result) {
    this.body = {result: result};
    this.status = 200;
  } else {
  	this.body = {error: "Result not found"};
  	this.status = 404;
  }
};

exports.getResults = function *() {
  let cip = this.passport.user.data.cip;
  let results = yield Result.find({cip: cip});
  if  (!results) {
    results = [];
  }

  this.body = {results: results};
  this.status = 200;
}