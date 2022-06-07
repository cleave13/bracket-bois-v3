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
        holes: 
            {
                type: Schema.Types.Array,
                ref: 'Hole'
            }
        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Course = model('Course', courseSchema);

module.exports = Course;
