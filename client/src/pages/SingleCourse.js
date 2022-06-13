import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_ALL_ROUNDS, QUERY_PLAYER_ROUND, QUERY_SINGLE_COURSE } from '../utils/queries';


import Navigation from '../components/Nav';
import Card from '../components/Card';
import Leaderboard from '../components/Leaderboard';

const SingleCourse = () => {
    const { loadingRounds, data: roundsData } = useQuery(QUERY_ALL_ROUNDS, {
        fetchPolicy: "no-cache"
    });

    const { courseId } = useParams();

    const { data: singleCourseData } = useQuery(QUERY_SINGLE_COURSE, {
        fetchPolicy: "no-cache",
        variables: {courseId: courseId}
    });

    const { loadingRound, singleRoundData } = useQuery(QUERY_PLAYER_ROUND, {
        fetchPolicy: "no-cache"
    });

    const allRounds = roundsData?.round || [];
    const singleCourse = singleCourseData?.course || [];
    // const singleRound = singleRoundData?.round || [];
    const allHoles = singleCourseData?.course.holes || [];

    console.log(singleCourse);

    return (
        <div>
            <Navigation />
            <main>
                {loadingRounds ? (
                    <div>Loading Leaderboard...</div>
                ) : (
                    <div>
                        <Leaderboard rounds={allRounds} courseData={singleCourse}/>
                    </div>
                )};

                {loadingRounds ? (
                    <div>Loading Scorecard...</div>
                ) : (
                    <div>
                        {/* {singleRound.map((playerRound, i) => ( */}
                            <Card courseData={singleCourse} holeData={allHoles}/>
                        {/* ))} */}
                    </div>
                )};
            </main>

        </div>
    );
};

export default SingleCourse;
