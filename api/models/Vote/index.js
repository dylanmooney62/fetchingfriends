const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    submission: {
      type: Schema.Types.ObjectId,
      ref: 'Submission',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Vote', voteSchema);
