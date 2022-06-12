import * as React from 'react';
import Round from './Round';

function Leaderboard(props) {

    const courseRounds = [
        {
            player: 'chris',
            netScore: -1,
            thru: 5
        },
        {
            player: 'darby',
            netScore: 0,
            thru: 12
        },
        {
            player: 'nick',
            netScore: 5,
            thru: 18
        },
    ]

    return (
        <section>
            <header>
                <h2>Testing {props.courseName}</h2>
            </header>
            <table>
                <thead>
                    <td>Player</td>
                    <td>Score</td>
                    <td>Thru</td>
                </thead>
                <tbody>
                    {courseRounds.map((round, i) => (
                        <Round key={i} round={round} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Leaderboard;
