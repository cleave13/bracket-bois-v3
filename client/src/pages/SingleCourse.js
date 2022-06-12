import { useQuery } from '@apollo/client';
import { QUERY_ALL_ROUNDS, QUERY_PLAYER_ROUND } from '../utils/queries';

import Navigation from '../components/Nav';
import { Leaderboard, Card } from '../components';

const SingleCourse = () => {
    const { loadingRounds, roundsData } = useQuery(QUERY_ALL_ROUNDS, {
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
                        {allRounds.map((rounds, i) => (
                            <Leaderboard key={i} course={rounds} />
                        ))}
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
