'use strict';

const Service = require('egg').Service;

class BannerService extends Service {
  async findBanner(query) {
    try {
      const result = await this.ctx.model.Banner.find().limit(query);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BannerService;
