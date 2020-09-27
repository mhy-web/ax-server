const { Controller } = require('egg');

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success({data, code, msg, ...reset}) {
    this.ctx.status = 200;
    code = code || 0;
    msg = msg || '';
    this.ctx.body = {
      code,
      msg: msg,
      data,
      ...reset
    };
  }

  failed(data, code, msg) {
    this.ctx.status = 500;
    this.ctx.body = {
      code,
      data,
      msg
    };
  }

  noFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
