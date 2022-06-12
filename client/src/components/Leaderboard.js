import * as React from 'react';
import Round from './Round';

function Leaderboard(props) {

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
                    {props.courseRounds.map((round, i) => (
                        <Round key={i} round={round} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Leaderboard;
