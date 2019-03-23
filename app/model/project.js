'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // const ObjectId = mongoose.Schema.Types.ObjectId;

  const projectSchema = new Schema({
    'img': String,
    'name': String,
    'desc': String,
    'type': String,
    'tag': String,
    'price': String,
    'country': String,
    'people': String,
    'more_info': [String],
    'time': {
      type: Date,
      default: Date.now
    },
    'create_time': {
      type: Date,
      default: Date.now
    },
    'update_time': {
      type: Date,
      default: Date.now
    }
  }, {
    timestamps: {
      createdAt: 'create_time',
      updatedAt: 'update_time'
    }
  });
  return mongoose.model('Project', projectSchema, 'project');
};
