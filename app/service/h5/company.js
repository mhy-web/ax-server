'use strict';

const Service = require('egg').Service;

class CompanyService extends Service {
  async findCompanyProfile(query) {
    try {
      const result = await this.ctx.model.Company.find().limit(query);
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = CompanyService;
