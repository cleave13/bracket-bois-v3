// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

import Navigation from '../components/Nav';
import CourseTile from '../components/CourseTile';

const Home = () => {
  return (
    <div>
      <Navigation />
      <main>
        <h1>Denver Municipal Golf Courses</h1>
        <CourseTile />
      </main>

    </div>
  );
};

export default Home;
