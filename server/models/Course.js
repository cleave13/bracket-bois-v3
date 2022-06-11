const { Schema, model } = require('mongoose');

// Schema to create Course model
const courseSchema = new Schema(
    {
        courseName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        imagePath: {
            type: String,
        },
        alt: {
            type: String,
        },
        description: {
            type: String,
        },
        holes:{
                type: Schema.Types.Array,
                ref: 'Hole'
            },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Course = model('Course', courseSchema);

module.exports = Course;
