var fs = require('fs');
var Result = require("mongoose").model("Result");

let challenges = [];

exports.init = function(callback) {
  let path = `${__dirname}/../challenges/descriptions`;
  fs.readdir(path, function(err, files) {
    for (var file of files) {
      let name = file.split('.')[0];
      let challengeConfig = require(`../challenges/tests/${name}.js`);
      challenges.push({name: name, content: fs.readFileSync(`${path}/${file}`, 'utf8'), points: challengeConfig.points, category: challengeConfig.category, isCodingChallenge: challengeConfig.isCodingChallenge})
    }
    callback(challenges);
  });
}

exports.getAll = function *() {
  this.body = {challenges: challenges};
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