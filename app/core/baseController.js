const { Controller } = require('egg');

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data, msg) {
    this.ctx.status = 200;
    msg = msg || '';
    this.ctx.body = {
      code: 0,
      msg: msg,
      data
    };
  }

  noFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
