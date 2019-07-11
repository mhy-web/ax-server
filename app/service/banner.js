'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class BannerService extends Service {
  async findBannerList({pageIndex = 1, pageSize = 10}) {
    console.log('pageIndex', pageIndex);
    console.log('pageSize', pageSize);
    return this.ctx.model.Banner.find().skip(parseInt(pageIndex, 10)).limit(parseInt(pageSize, 10));
  }

  async findBanner(query) {
    try {
      const result = await this.ctx.model.Banner.find().limit(query);
      return result;
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  }

  async createBanner(query) {
    try {
      const result = await this.ctx.model.Banner.insertMany(query);
      return result;
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  }

  async updateBanner({_id = '', query}) {
    try {
      // const res = await this.ctx.model.Banner.find({ _id: ObjectId(_id)});
      // console.log('res', res);

      const result = await this.ctx.model.Banner.findOneAndUpdate({ _id: ObjectId(_id)}, {$set: { ...query}});
      return result;
    } catch (e) {
      this.logger.error(e);
      return e;
    }
  }
}

module.exports = BannerService;
