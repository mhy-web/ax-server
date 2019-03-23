'use strict';

const Service = require('egg').Service;

class CompanyService extends Service {
  async findCompanyProfile() {
    try {
      const result = await this.ctx.model.Company.find();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = CompanyService;
