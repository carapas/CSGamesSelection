var request = require("../middlewares/request");

var _challenges = {};
var _changeListeners  = [];
var _initCalled = false;

import ChallengeApi from "../api/ChallengeApi";
const challengeApi = new ChallengeApi();

var ChallengeStore = {
  init: function () {
    if(_initCalled)
      return;
    _initCalled = true;
    this.fetchAll();
  },
  fetchAll: function () {
    return challengeApi.readAll()
      .then((challenges) => {
        challenges.forEach((challenge) => {
          _challenges[challenge.name] = challenge;
        });
        ChallengeStore.notifyChange();
    }).catch(err => {console.log(err.message); console.log(err.stack);});
  },
  addUser: function (user, done) {
    throw new Error("Not Implemented");
  },
  updateUser: function (user, done) {
    throw new Error("Not Implemented");
  },
  removeUser: function (id, done) {
    throw new Error("Not Implemented");
  },
  getChallenges: function () {
    return Object.keys(_challenges).map(key => _challenges[key]);
  },
  getChallenge: function (name) {
    return _challenges[name] || {};
  },
  notifyChange: function() {
    _changeListeners.forEach(function (listener) {
      listener();
    });
  },
  addChangeListener: function (listener) {
    _changeListeners.push(listener);
  },
  removeChangeListener: function (listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l;
    });
  }
};

module.exports = ChallengeStore;
