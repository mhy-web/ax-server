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
  async addActivityItem(query) {
    const params = Object.assign(query, {
      start_time: new Date(query.start_time),
      end_time: new Date(query.end_time)
    });
    // A Mongoose model doesn't have an insertOne method. Use the create method instead
    return this.ctx.model.Activity.create(params);
  }
  async updateActivityItem(query) {
    const activityId = ObjectId(query._id);
    delete query._id;
    return this.ctx.model.Activity.updateOne({
      '_id': activityId
    }, query);
  }
}

module.exports = ActivityService;
