import { useQuery } from '@apollo/client';
import { QUERY_COURSES } from '../utils/queries';

import Navigation from '../components/Nav';
import CourseTile from '../components/CourseTile';

const Home = () => {
  const { loading, data } = useQuery(QUERY_COURSES, {
    fetchPolicy: "no-cache"
  });

  const courseList = data?.courses || [];

  return (
    <div>
      <Navigation />
      <main>
        <h1 className="center-text">Select a Denver Municipal Golf Course</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div class="tile-container">
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
