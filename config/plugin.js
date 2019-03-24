'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  static: {
    enable: true
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
