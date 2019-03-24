/* eslint valid-jsdoc: "off" */

'use strict';

/**
* built-in config
* @type {Egg.EggAppConfig}
**/
const config = {

  logger: {
    level: 'DEBUG'
  },
  // add your middleware config here
  middleware: ['proxy', 'gzip'],

  // httpProxy: {
  //   '/api': {
  //     target: 'http://localhost:7001/',
  //     pathRewrite: {'^/api': ''}
  //   }
  // },

  // cors: {
  //   origin: '*', // 访问白名单,根据你自己的需要进行设置
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // },

  mongoose: {
    client: {
      url: 'mongodb://localhost:27017/ax_db',
      options: {
        useNewUrlParser: true
      }
    }
  },

  security: {
    domainWhiteList: ['localhost'] // 安全白名单，以 . 开头
  }
};

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553329987414_9935';
  return config;
};
