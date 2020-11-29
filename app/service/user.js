'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const expire = 60 * 60 * 2; // 单位：s

class UserService extends Service {
  async logIn(query) {
    const {user_name, password} = query;

    let user = await this.ctx.model.User.find({user_name});
    user = Array.isArray(user) && user.length > 0 ? user[0] : null;
    if (!user) {
      return {
        msg: 'user not found'
      };
    }

    const salt = user.salt;
    const pwdHash = this.ctx.helper.getPasswordHash(password, salt);
    if (pwdHash !== user.password) {
      return {
        success: false,
        err: 'PWDERR'
      };
    }

    const now = Math.round(Date.now() / 1000);

    const { app } = this;
    const token = app.jwt.sign({
      u: user._id,
      exp: now + expire // 过期时间戳
      // iat: now // 签发时间，自动生成
      // nbf: now // 生效时间，默认为签发时间
    }, app.config.jwt.secret);

    const data = this.ctx.helper.filterPropFromArray(user, ['__v', 'salt', 'password']);
    return {
      success: true,
      token: token,
      data
    };
  }

  async signUp(query) {
    const { user_name, password, is_invited, nick, mobile, email, age, school, point, address, sex } = query;

    const salt = this.ctx.helper.getRandomSalt();
    const pwd = this.ctx.helper.getPasswordHash(password, salt);
    const data = {
      user_name,
      password: pwd,
      // _pwd: password,
      salt,
      is_invited,
      nick: nick || '',
      mobile: mobile || '',
      email: email || '',
      age: age || '',
      school: school || '',
      point: point || '',
      address: address || '',
      sex: sex || ''
    };
    const res = await this.ctx.model.User.create(data);
    if (res) {
      return {
        data: res
      };
    }
  }

  async findUser(query) {
    return await this.ctx.model.User.find({...query});
  }
  async addUser(query) {
    const userName = query.user_name;
    const res = await this.ctx.model.User.find({user_name: userName});
    if (res.length > 0) {
      return {
        code: 40001,
        msg: '用户名已存在'
      };
    }
    /*
    const user = new this.ctx.model.User({
      ...query
    });
    user.save();
    return user;
    */
    return this.ctx.model.User.create(query);
  }
  async updateUser(query) {
    const id = query._id;
    delete query._id;
    const result = await this.ctx.model.User.updateOne({
      '_id': ObjectId(id)
    }, query, {upsert: true, multi: false});
    console.log('result', result);
    return result;
  }
}

module.exports = UserService;
