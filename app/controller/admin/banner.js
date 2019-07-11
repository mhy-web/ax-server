'use strict';

const Constructor = require('egg').Controller;

class AdminBannerControll extends Constructor {
  async getBannerList() {
    const { ctx } = this;
    console.log('ctx', ctx);
    try {
      const res = await this.service.banner.findBannerList();
      console.log('res', res);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = AdminBannerControll;
