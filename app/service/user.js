'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { getRandomSalt, getPasswordHash, createAuth } = require('../core/crypto');

class UserService extends Service {
  async logIn(query) {
    const {user_name, password} = query;

    let user = await this.ctx.model.User.find({user_name});
    user = Array.isArray(user) && user.length > 0 ? user[0] : null;
    if (user) {
      const salt = user.salt;
      const pwdHash = getPasswordHash(password, salt);
      console.log('===user---', user);
      if (pwdHash === user.password) {
        const auth = createAuth(password, user_name);
        return {
          success: true,
          auth: auth,
          data: user
        };
      } else {
        return {
          success: false,
          err: 'PWDERR'
        };
      }
    } else {
      return {
        msg: 'user not found'
      };
    }
  }

  async signUp(query) {
    const { user_name, password, is_invited, nick, mobile, email, age, school, point, address, sex } = query;

    const salt = getRandomSalt();
    const pwd = getPasswordHash(password, salt);
    const data = {
      user_name,
      password: pwd,
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
