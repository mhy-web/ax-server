'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class ProjectService extends Service {
  async findProList(query) {
    try {
      const page_size = Number(query.page_size) || 10;
      const page_index = Number(query.page_index) || 1;
      const result = await this.ctx.model.Project.find().skip(page_index).limit(page_size);
      return result;
    } catch (e) {
      console.log(e);
    }
  }
  async findProjectDetail(pid) {
    try {
      return await this.ctx.model.Project.findOne({'_id': ObjectId(pid)});
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ProjectService;
