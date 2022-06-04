const db = require('../config/connection');
const { Course } = require('../models/Course');

const courseData = require('./courseData.json');

db.once('open', async () => {
  await Course.deleteMany({});

  await Course.insertMany(courseData);

  console.log('Courses seeded!');
  process.exit(0);
});
