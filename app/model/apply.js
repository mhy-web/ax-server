'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ApplySchema = new Schema({
    'project_id': String,
    'applyer_id': String,
    'apply_date': {
      type: Date,
      default: Date.now
    },
    'apply_mobile': Number,
    'point_spent': String
  });
  return mongoose.model('Apply', ApplySchema, 'apply');
};
