const { Schema, model } = require('mongoose');
const courseSchema = require('./Course')

// Schema to create Course model
const roundSchema = new Schema(
  {
    username: {
      type: String,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    },
    date: {
      type: Date,
      required: true,
    },
    scores: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Round = model('Round', roundSchema);

module.exports = Round;
