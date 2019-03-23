'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
  async findHomeProList() {
    try {
      const result = await this.ctx.model.Project.find();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ProjectService;
