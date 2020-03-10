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
  middleware: ['errorHandler', 'proxy', 'gzip'],

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
      // 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]'
      // url: 'mongodb://axAdmin:csu@hwsrv-539295.hostwindsdns.com:27017/ax_db',
      url: 'mongodb://localhost:27017/ax_db',
      options: {
        useNewUrlParser: true,
        auto_reconnect: true,
        poolSize: 10
        // server: {
        // }
      }
    }
  },

  security: {
    xframe: {
      enable: false
    },
    csrf: {
      enable: false
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      // ignore: '127.0.0.1' // ctx => isInnerIp(ctx.ip)
    },
    // csp: {
    // match: '/example', // 只针对某一路径
    // policy: {
    //   // ...
    // },
    // ignore: '/example', // 针对某一路径忽略某安全选项
    // xframe: {
    //   // ...
    // },
    // },
    domainWhiteList: ['localhost', '127.0.0.1'] // 安全白名单，以 . 开头
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
