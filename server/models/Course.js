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
        holes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'hole'
            }
        ],
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
