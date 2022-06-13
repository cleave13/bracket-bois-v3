import * as React from 'react';

function Round(props) {
    const round = props.round;

    const totalScore = round.scores.reduce(function(a,b) {
        return a + b;
      }, 0);

    const thru = round.scores.length;

    console.log(round);

    return (
        <tr>
            <td>{round.username}</td>
            <td>{totalScore}</td>
            <td>{thru}</td>      
        </tr>
    )
}

export default Round;
