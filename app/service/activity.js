'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class ActivityService extends Service {
  async findActivityList(query) {
    const pageIndex = query.page_index - 1 || 0;
    const pageSize = Number(query.page_size) || 10;
    return this.ctx.model.Activity.find().skip(pageIndex).limit(pageSize);
  }
  async findActivityDetail(activityId) {
    return this.ctx.model.Activity.findOne({'_id': ObjectId(activityId)});
  }
}

module.exports = ActivityService;
