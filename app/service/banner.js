'use strict';

const Service = require('egg').Service;

class BannerService extends Service {
  async findBanner() {
    console.log('find');
    try {
      const result = await this.ctx.model.Banner.find();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BannerService;
