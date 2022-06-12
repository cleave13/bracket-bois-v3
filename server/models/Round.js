const { Schema, model } = require('mongoose');
const courseSchema = require('./Course')

// Schema to create Course model
const roundSchema = new Schema(
  {
    playerName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    course:  {
      type: Schema.Types.ObjectId,
      ref: 'Course'
  },
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
