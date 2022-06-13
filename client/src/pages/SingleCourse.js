import { useQuery } from '@apollo/client';
import { QUERY_ALL_ROUNDS, QUERY_PLAYER_ROUND } from '../utils/queries';

import Navigation from '../components/Nav';
import Card from '../components/Card';
import Leaderboard from '../components/Leaderboard';

const SingleCourse = () => {
    const { loadingRounds, data: roundsData } = useQuery(QUERY_ALL_ROUNDS, {
        fetchPolicy: "no-cache"
    });

    const { loadingRound, singleRoundData } = useQuery(QUERY_PLAYER_ROUND, {
        fetchPolicy: "no-cache"
    });

    const allRounds = roundsData?.round || [];
    const singleRound = singleRoundData?.round || [];

    return (
        <div>
            <Navigation />
            <main>
                {loadingRounds ? (
                    <div>Loading Leaderboard...</div>
                ) : (
                    <div>
                        <Leaderboard rounds={allRounds} courseName={'City Perk'}/>
                    </div>
                )};

                {loadingRound ? (
                    <div>Loading Scorecard...</div>
                ) : (
                    <div>
                        {singleRound.map((playerRound, i) => (
                            <Card key={i} singleRound={playerRound} />
                        ))}
                    </div>
                )};
            </main>

        </div>
    );
};

export default SingleCourse;
