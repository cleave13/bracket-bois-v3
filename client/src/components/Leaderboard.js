import * as React from 'react';
import Round from './Round';

function Leaderboard(props) {
    const course = props.courseData;
    console.log(course);

    return (
        <section>
            <header>
                <h2>Testing {course.courseName}</h2>
            </header>
            <table>
                <thead>
                    <tr>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Thru</th>
                    </tr>
                </thead>
                <tbody>
                    {props.rounds.map((round, i) => (
                        <Round key={i} round={round} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Leaderboard;
