'use strict';
const crypto = require('crypto'); // node 内置包

/**
 * app/extend/helper.js
 * this.ctx.helper.foo
 * heapers
 */
module.exports = {
  foo(params) {
    console.log('----foo---\n', params);
  },
  /**
   * @param headers {}
   * @param headerKey string
   */
  getHeader(headers = {}, headerKey = '') {
    if (!this.ctx.helper.isPureObject(headers) || !headerKey) {
      return;
    }
    headerKey = headerKey.toLowerCase();
    if (!(headerKey in headers)) {
      return '';
    }
    return headers[headerKey];
  },
  /**
   * 纯对象
   */
  isPureObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  },
  /**
   * 正则
   */
  isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  },
  /**
   * @param obj {}
   * @param props []
   */
  filterPropFromArray(obj = {}, props = []) {
    obj = JSON.parse(JSON.stringify(obj));
    if (!this.ctx.helper.isPureObject(obj)) {
      return obj;
    }
    if (props.length === 0) {
      return obj;
    }
    const o = {};
    Object.keys(obj).forEach(key => {
      const isExists = props.indexOf(key) > -1;
      if (!isExists) {
        o[key] = obj[key];
      }
    });
    return o;
  },
  /**
   * bcrypt(SHA512(password), salt, cost)
   */
  // 生成随机salt
  getRandomSalt(len = 16) {
    return crypto.randomBytes(len).toString('hex');
  },
  getPasswordHash(password, salt) {
    const pwdHash = crypto.createHash('sha256').update(password).digest('hex');
    return crypto.createHash('sha256').update(salt + pwdHash).digest('hex');
  }
  /*  createAuth: (uid) => {
    // const { user_id, password, timestamp } = info;
    return crypto.createHash('md5').update(`${user_id}${password}${timestamp}`).digest('hex');
  },
  verifyAuth(info, pwdhash) {
    const rpwd = crptyUtils.createAuth(info);
    return rpwd === pwdhash;
  } */
};

