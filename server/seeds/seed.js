const db = require('../config/connection');
const { Course, User } = require('../models');

const courseData = require('./courseData.json');
const userData = require('./userData.json')

db.once('open', async () => {
  try {

    await Course.deleteMany({});
    await Course.insertMany(courseData);

    await User.deleteMany({});
    await User.insertMany(userData);
  
    console.log('Data seeded!');
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
