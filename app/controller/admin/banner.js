'use strict';

// const Constructor = require('egg').Controller;
const BaseController = require('../../core/baseController');

class AdminBannerControll extends BaseController {
  async getBannerList() {
    const { ctx } = this;
    let data = null;
    try {
      const query = ctx.query;
      const res = await this.service.banner.findBannerList({...query});
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

  async updateOrCreateBanner() {
    const { ctx } = this;
    console.log('query', ctx.query);
    let query = ctx.query || {};
    const currentBannerId = (ctx.query || {}).hasOwnProperty('_id') ? (ctx.query || {})._id : '';

    query = {
      is_online: query.hasOwnProperty('is_online') ? query.is_online : false,
      img_url: query.img_url || '',
      jump_url: query.jump_url || '',
      desc: query.desc || ''
    };
    try {
      if (currentBannerId) {
        query.id = ctx.query._id;
        console.log('------------------', ctx.query._id);
        const resp = await this.service.banner.updateBanner({_id: currentBannerId, query});
        console.log('=========resp==============', resp);
        ctx.body = {
          code: 200,
          msg: 'update banner success',
          data: resp
        };
      } else {
        const resp = await this.service.banner.createBanner(query);
        console.log(resp);
        ctx.body = {
          code: 200,
          msg: 'create banner success',
          data: resp
        };
      }
    } catch (e) {
      this.logger.error(e);
      ctx.body = {
        code: 20001,
        msg: e,
        data: e
      };
    }
  }
}

module.exports = AdminBannerControll;
