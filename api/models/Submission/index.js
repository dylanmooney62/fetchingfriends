const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
    },
    imgUrl: {
      type: String,
      default: 'https://picsum.photos/id/237/300',
    },
    awards: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        imgUrl: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

submissionSchema.virtual('votes', {
  ref: 'Vote',
  localField: '_id',
  foreignField: 'submission',
  count: true,
});

submissionSchema.pre('find', function () {
  this.populate({
    path: 'user',
    select: 'username',
  }).populate('votes');
});

module.exports = mongoose.model('Submission', submissionSchema);
