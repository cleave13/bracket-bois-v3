const db = require('../config/connection');
const { Course } = require('../models');

const courseData = require('./courseData.json');

db.once('open', async () => {
  try {

    await Course.deleteMany({});

    await Course.insertMany(courseData);
  
    console.log('Courses seeded!');
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
