const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      immutable: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        'Please add a valid email',
      ],
      set: (v) => v.toLowerCase(),
    },
    role: {
      type: String,
      enum: ['user'],
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

userSchema.virtual('votes', {
  ref: 'Vote',
  localField: '_id',
  foreignField: 'user',
});

userSchema.pre('findOne', function () {
  this.populate('votes');
});

// submissionSchema.pre('find', function () {
//   this.populate({
//     path: 'user',
//     select: 'username',
//   }).populate('votes');
// });

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);
