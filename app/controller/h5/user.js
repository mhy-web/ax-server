-'use strict';

// const Controller = require('egg').Controller;
const BaseController = require('../../core/baseController');
const types = require('../../core/types');

class UserController extends BaseController {
  async login() {
    const msg = '';
    const params = this.ctx.request.body;
    const res = await this.ctx.service.user.logIn(params);
    const logInRules = {
      user_name: 'string',
      password: {
        required: true,
        type: 'string'
      }
    };
    this.ctx.helper.foo('hello ');
    const errors = this.ctx.validate(logInRules, params);
    console.log('errors', errors);
    console.log('res', res);
    if (res.success) {
      this.success({ data: res.data, msg, auth: res.token });
    } else {
      this.success({msg: types[res.err], code: 1});
    }
  }

  async signUp() {
    try {
      const query = this.ctx.query;
      const users = await this.ctx.service.user.findUser({user_name: query.user_name});
      if (!users.length) {
        const res = await this.ctx.service.user.signUp(query);
        this.success({
          data: res
        });
      } else {
        this.success({code: 20001, msg: 'user name repeat'});
      }
    } catch (err) {
      console.error(err);
    }
  }

  async userEdit() {
    const query = this.ctx.query;
    try {
      console.log(query);
      if (query.hasOwnProperty('_id') && query._id) {
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
        console.log('res', res);
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

  async logout() {
    this.ctx.body = {
      code: 0,
      msg: 'logout'
    };
  }
  async userInfo() {
    const user = this.ctx.state.user;
    console.log('---user---\n', user);
    try {
      const user_id = user.u;
      const res = await this.ctx.service.user.findUser({_id: user_id});
      if (res.length) {
        this.ctx.body = {
          code: 0,
          msg: '',
          data: res[0] || []
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

