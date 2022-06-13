import * as React from 'react';
import Round from './Round';

function Leaderboard(props) {
    const course = props.courseData;
    console.log(course);


    return (
        <section>
            <header>
                <h2>  {course.courseName} Leaderboard</h2>
            </header>
            <table id="leaderboard">
                <thead>
                    <tr>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Thru</th>
                    </tr>
                </thead>
                <tbody>
                    {props.rounds.map((round, i) => (
                        <Round key={i} round={round} course={course}/>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Leaderboard;
