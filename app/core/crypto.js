const crypto = require('crypto'); // node 内置包

/**
 * bcrypt(SHA512(password), salt, cost)
 */
module.exports = {
  // 生成随机salt
  getRandomSalt(len = 16) {
    return crypto.randomBytes(len).toString('hex');
  },
  getPasswordHash(password) {
    const pwdHash = crypto.createHash('sha256').update(password).digest('hex');
    return crypto.createHash('sha256').update(pwdHash).digest('hex');
  },
  createAuth(pwd, userName) {
    return crypto.createHash('md5').update(userName + pwd).digest('hex');
  }

};
