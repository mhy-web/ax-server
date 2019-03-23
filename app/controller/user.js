'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
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
