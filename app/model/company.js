'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const companySchema = new Schema({
    'title': String,
    'desc': String,
    'tag': String,
    'img': String,
    'is_online': {
      type: Boolean,
      default: true
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
    },
    versionKey: false
  });
  return mongoose.model('Company', companySchema, 'company');
};
