'use strict';

const Service = require('egg').Service;

class BannerService extends Service {
  async findBanner(query) {
    console.log('-----findBanner----db---', this.ctx.model);
    try {
      const result = await this.ctx.model.Banner.find().limit(query);
      // const result = await this.ctx.db.banner.find();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BannerService;
