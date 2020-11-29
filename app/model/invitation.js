'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const InvitationSchema = new Schema({
    'project_id': String,
    'invitee_id': String,
    'inviter_id': String,
    'is_applyed': {
      type: Boolean,
      default: false
    },
    'invite_date': {
      type: Date,
      default: Date.now
    },
    'apply_date': {
      type: Date,
      default: Date.now
    },
    'apply_price': String,
    'apply_mobile': Number,
    'point_spent': Number
  }, {
    versionKey: false
  });
  return mongoose.model('Invitation', InvitationSchema, 'invitation');
};

