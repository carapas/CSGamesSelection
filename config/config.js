"use strict";
var path = require("path");
var _ = require("lodash");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var base = {
  app: {
    root: path.normalize(__dirname + "/.."),
    env: env,
  }
};

var specific = {
  development: {
    app: {
      port: 3000,
      name: "Selection CS GAMES - Dev",
      keys: ["super-secret-hurr-durr"],
      proxy: true,
    },
    mongo: {
      url: "mongodb://localhost/csgamesplatform_dev",
    },
  },
  test: {
    app: {
      port: 3001,
      name: "Selection CS GAMES - Test realm",
      keys: ["super-secret-hurr-durr"],
    },
    mongo: {
      url: "mongodb://localhost/csgamesplatform_test",
    }
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: "Selection CS GAMES",
      proxy: true,
      keys: ["super-secret-hurr-durr"]
    },
    mongo: {
      url: "mongodb://localhost/csgamesplatform",
    }
  }
};

module.exports = _.merge(base, specific[env]);
