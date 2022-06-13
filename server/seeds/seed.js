const { getRounds } = require('bcrypt');
const db = require('../config/connection');
const { Course, User, Round } = require('../models');

const courseSeedData = require('./courseSeedData.json');
const userSeedData = require('./userSeedData.json')

db.once('open', async () => {
  try {

    await Course.deleteMany({});
    const courses = await Course.insertMany(courseSeedData);

    await User.deleteMany({});
    const users = await User.insertMany(userSeedData);

    await Round.deleteMany({});

    console.log('Reference data seeded!');

    // Create rounds at random
    for (let i = 0; i < 50; i++) {
      // Get a random user's `id`
      const { username: randomUsername } = users[
        Math.floor(Math.random() * users.length)
      ];

      // Get a random course's `id`
      const { _id: randomCourseId } = courses[
        Math.floor(Math.random() * courses.length)
      ];

      // Generate random number of holes that the player is through
      const thru = Math.floor(Math.random() * 19);
      console.log(`thru: ${thru}`);

      // Declare empty scores array
      let randomScores = [];

      (() => {
        let i = 0;
        while (i < thru) {
          const score = Math.floor(Math.random() * 6) + 2
          randomScores.push(score);
          i++;
        }
      })();

      console.log(`randomScores: ${randomScores}`);

      // Create a new round with random `username`, `course`, and `score` values.
      await Round.create({
        username: randomUsername, 
        course: randomCourseId,
        date: new Date(),
        scores: randomScores,
      }).catch((err) => {
        console.log(err);
      });
    }
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
