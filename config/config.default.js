/* eslint valid-jsdoc: "off" */

'use strict';
const env = require('../utils/env');

/**
* built-in config
* @type {Egg.EggAppConfig}
**/
const config = {
  onerror: {
    //
    all(err, ctx) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
  // 默认只会输出 INFO 及以上（WARN 和 ERROR）的日志到终端中。（注意：这些日志默认只在 local 和 unittest 环境下会打印到终端）
  // 日志分为 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别。
  logger: {
    dir: '~/logs/ax-server/',
    // 打印到文件的日志
    level: 'ERROR',
    // 终端日志级别
    consoleLevel: 'NONE'
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
      url: env.getMongoUrl(),
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
