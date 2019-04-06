'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findUser() {
    const result = await this.ctx.model.User.find();
    return result;
  }
  async addUser(query) {
    const userName = query.user_name;
    const isExists = await this.ctx.model.User.find({user_name: userName});
    if (isExists) {
      return {
        code: 40001,
        msg: '用户名已存在'
      };
    }
    const user = new this.ctx.model.User({
      ...query
    });
    user.save();
  }
  async updateUser() {
    const result = await this.ctx.model.User.updateOne({
      '_id': '5c00f0ce862e9227acb56d22'
    }, {
      password: '12345'
    });
    return result;
  }
}

module.exports = UserService;
