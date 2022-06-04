const { Schema, model } = require('mongoose');
const courseSchema = require('./Course')

// Schema to create Course model
const roundSchema = new Schema(
  {
    playerName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    course: courseSchema,
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Round = model('round', roundSchema);

module.exports = Round;
