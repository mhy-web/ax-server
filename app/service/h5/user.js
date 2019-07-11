'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class UserService extends Service {
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
