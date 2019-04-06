'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async addUser() {
    const query = this.ctx.query;
    console.log('---------------------------query---------------------------', query);
    const res = await this.ctx.service.user.addUser(query);
    console.log('res', res);
    this.ctx.body = {
      code: 0,
      msg: 'create user'
    };
  }

  async login() {
    this.ctx.body = {
      code: 0,
      token: '',
      msg: ''
    };
  }
  async logout() {
    this.ctx.body = {
      code: 0,
      msg: 'logout'
    };
  }
  async userInfo() {
    this.ctx.body = {
      code: 0,
      data: {

      }
    };
  }
}

module.exports = UserController;
