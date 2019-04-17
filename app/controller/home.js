'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body 是 ctx.response.body 的简写， 和 ctx.request.body 不同
    ctx.body = 'hi, egg';
  }

  async homeInfo() {
    const { ctx } = this;
    const query = ctx.query;
    const bannerLimit = query.banner_limit || 5;
    const companyLimit = query.company_limit || 3;
    const proParams = {
      ...query.page_index,
      ...query.page_size
    };
    let data = {};
    try {
      const banner = await this.service.banner.findBanner(bannerLimit);
      const company = await this.service.company.findCompanyProfile(companyLimit);
      const prolist = await this.service.project.findProList(proParams);
      data = {
        banner: banner,
        company_profile: company,
        home_pro_list: prolist

      };
    } catch (e) {
      console.log(e);
    }

    ctx.body = {
      code: 0,
      msg: 'home info',
      data
    };
    ctx.status = 200;
  }

  async projectList() {
    const { ctx } = this;
    const query = ctx.query;
    let data = [];
    try {
      data = await this.service.project.findProList(query);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    ctx.body = {
      code: 0,
      msg: 'project list',
      list: data
    };
  }

  async projectDetail() {
    const { ctx } = this;
    const query = ctx.query;
    let data = {};
    const { pid } = query;

    try {
      data = await this.service.project.findProjectDetail(pid);
    } catch (e) {
      console.log(e);
    }
    ctx.body = {
      code: 0,
      msg: 'project detail',
      data
    };
  }
  async activityList() {
    const { ctx } = this;
    const query = ctx.query;
    let data = [];
    try {
      data = await this.service.activity.findActivityList(query);
    } catch (e) {
      console.log(e);
    }
    ctx.body = {
      code: 0,
      msg: 'activity list',
      data
    };
  }
  async activityDetail() {
    const { ctx } = this;
    let data = {};
    const activityId = ctx.query.aid;
    try {
      data = await this.service.activity.findActivityDetail(activityId);
    } catch (e) {
      console.log(e);
    }
    this.ctx.body = {
      code: 0,
      data
    };
  }
  async activityAdd() {
    const query = this.ctx.query;
    try {
      const res = await this.service.activity.addActivityItem(query);
      if (res) {
        this.ctx.body = {
          code: 0,
          msg: 'successfull',
          data: res
        };
      }
    } catch (e) {
      console.error(e);
      this.ctx.body = {
        code: 400,
        msg: 'successfull',
        data: e
      };
    }
  }
  async activityUpdate() {
    const query = this.ctx.query;
    if (query.hasOwnProperty('_id') && query.id) {
      try {
        const res = await this.service.activity.updateActivityItem(query);
        console.log('res', res);
        this.ctx.body = {
          code: 0,
          msg: 'update successfull',
          data: res
        };
      } catch (e) {
        console.error(e);
      }
    } else {
      this.ctx.body = {
        code: 400,
        msg: '数据不存在'
      };
    }
  }
}

module.exports = HomeController;
