'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async proxy() {
    const { ctx } = this;
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('content-type', 'application/json;charset=UTF-8');
  }
  async index() {
    const { ctx } = this;
    // ctx.body 是 ctx.response.body 的简写， 和 ctx.request.body 不同
    console.log('----url---', ctx.url);
    ctx.body = 'hi, egg';
  }

  async homeInfo() {
    const { ctx } = this;
    const banner = await this.service.banner.findBanner();
    const company = await this.service.company.findCompanyProfile();
    const prolist = await this.service.project.findHomeProList();

    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('content-type', 'application/json;charset=UTF-8');

    ctx.body = JSON.stringify({
      code: 0,
      msg: 'home info',
      data: {
        banner: banner,
        company_profile: company,
        home_pro_list: prolist
      }
    });
    ctx.status = 200;
    console.log('--------------hahah---------', ctx.body);
  }

  async projectList() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: 'project list',
      list: []
    };
  }

  async projectDetail() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: 'project detail',
      data: {}
    };
  }
  async activityList() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: 'activity list',
      data: {}
    };
  }
  async activityDetail() {
    this.ctx.body = {
      code: 0,
      data: {}
    };
  }
  async activityAdd() {
    this.ctx.body = {
      code: 0,
      msg: 'successfull'
    };
  }
}

module.exports = HomeController;
