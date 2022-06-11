import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../utils/queries';

import Navigation from '../components/Nav';
import CourseTile from '../components/CourseTile';

const Home = () => {
  const { loading, data } = useQuery(QUERY_COURSES, {
    fetchPolicy: "no-cache"
  });

  const courseList = data?.course || [];

  console.log(courseList);

  return (
    <div>
      <Navigation />
      <main>
        <h1>Denver Municipal Golf Courses</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {courseList.map((course, i) => (
              <CourseTile key={i} course={course} />
            ))}
          </div>
        )};
      </main>

    </div>
  );
};

export default Home;
