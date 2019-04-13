'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userTestExists() {
    let isExists = false;
    try {
      const query = this.ctx.query;
      const res = await this.ctx.service.user.findUser(query, 'one');
      isExists = res.length > 0;
    } catch (e) {
      console.error(e);
      this.ctx.body = {
        code: 40001,
        is_exists: '',
        msg: 'test user exists error'
      };
    }
    this.ctx.body = {
      code: 0,
      is_exists: isExists
    };
  }
  async userEdit() {
    const query = this.ctx.query;
    try {
      if (query._id) {
        const res = await this.ctx.service.user.updateUser(query);
        console.log('object', res);
        if (res.ok) {
          this.ctx.body = {
            code: 0,
            msg: '更新成功'
          };
        } else {
          this.ctx.body = {
            code: 400004,
            msg: '更新失败'
          };
        }
      } else {
        const res = await this.ctx.service.user.findUser({user_name: query.user_name});
        if (res.length > 0) {
          this.ctx.body = {
            code: 400003,
            msg: '用户已存在',
            data: res
          };
        } else {
          const result = await this.ctx.service.user.addUser(query);
          this.ctx.body = {
            code: 0,
            msg: '用户已存在',
            data: result
          };
        }
      }
    } catch (e) {
      console.error(e);
    }
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
    try {
      const query = this.ctx.query;
      console.log('this', this.ctx);
      const res = await this.ctx.service.user.findUser(query);
      console.log('res', res);
      if (res.length) {
        this.ctx.body = {
          code: 0,
          msg: '',
          data: res[0]
        };
      } else {
        this.ctx.body = {
          code: 0,
          msg: '用户不存在'
        };
      }
    } catch (e) {
      console.error(e);
      this.ctx.body = {
        code: 500,
        msg: 'network error',
        data: ''
      };
    }
  }
}

module.exports = UserController;
