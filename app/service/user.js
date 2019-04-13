'use strict';

const Service = require('egg').Service;

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
    const user = new this.ctx.model.User({
      ...query
    });
    user.save();
    return user;
  }
  async updateUser(query) {
    const result = await this.ctx.model.User.updateOne({
      '_id': query.id
    }, {
      ...query
    });
    return result;
  }
}

module.exports = UserService;
