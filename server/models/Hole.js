const { Schema, model } = require('mongoose');

// Schema to create User model
const holeSchema = new Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    par: {
      type: Number,
      required: true,
      min: 3,
      max: 5,
    },
    yardage: {
      type: Number,
      required: true,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Hole = model('Hole', holeSchema);

module.exports = Hole;
