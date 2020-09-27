'use strict';

// const Controller = require('egg').Controller;
const BaseController = require('../../core/baseController');
const types = require('../../core/types');

class UserController extends BaseController {
  async login() {
    try {
      const data = {};
      let msg = '';
      const query = this.ctx.query;
      const res = await this.ctx.service.user.logIn(query);
      console.log('res', res);

      if (res.success) {
        const user = res.data;
        data.token = user.token;
        data.user_name = user.user_name;
        data.nick = user.nick;
        data.address = user.address;
        data.point = user.point;
        data.age = user.age;
        data.sex = user.schsexool;
        data.school = user.school;
      } else {
        msg = types.PWDERR;
      }
      this.success({data, msg, auth: res.auth});
    } catch (err) {
      console.error(err);
      this.failed({}, 500, 'service error');
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

