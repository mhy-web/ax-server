'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  static: {
    enable: true
  },
  // sessionRedis: {
  //   enable: true,
  //   package: 'egg-session-redis'
  // },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  // cors: {
  //   enable: true,
  //   package: 'egg-cors'
  // },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  }
  // httpProxy: {
  //   enable: false,
  //   package: 'egg-http-proxy'
  // }
};
