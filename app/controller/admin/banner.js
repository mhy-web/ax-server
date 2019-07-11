'use strict';

const Constructor = require('egg').Controller;

class AdminBannerControll extends Constructor {
  async getBannerList() {
    const { ctx } = this;
    let data = null;
    try {
      const query = ctx.query;
      const res = await this.service.admin.banner.findBannerList({...query});
      data = res;
    } catch (e) {
      console.error(e);
    }

    ctx.body = {
      code: 0,
      msg: 'banner list',
      data
    };
    ctx.status = 200;
  }
}

module.exports = AdminBannerControll;
