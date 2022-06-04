const { Schema, model } = require('mongoose');
const holeSchema = require('./Hole')

// Schema to create Course model
const courseSchema = new Schema(
    {
        courseName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        holes: [holeSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Course = model('course', courseSchema);

module.exports = Course;
