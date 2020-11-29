'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const activitySchema = new Schema({
    'title': String,
    'start_time': {
      type: Date,
      default: Date.now
    },
    'end_time': {
      type: Date,
      default: Date.now
    },
    'is_online': {
      type: Boolean,
      default: false
    },
    'banner': String,
    'more_info': [String]
  }, {
    versionKey: false
  });
  return mongoose.model('Activity', activitySchema, 'activity');
};
