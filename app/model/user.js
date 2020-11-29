'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    'user_name': String,
    'password': String,
    // '_pwd': String,
    'salt': String,
    'nick': String,
    'sex': String,
    'mobile': Number,
    'email': String,
    'age': String,
    'school': String,
    'point': Number,
    'address': String,
    'apply_date': {
      type: Date,
      default: Date.now
    },
    'is_invited': {
      type: Boolean,
      default: false
    },
    inviter_id: String
  }, {
    versionKey: false
  });
  return mongoose.model('User', UserSchema, 'user');
};

