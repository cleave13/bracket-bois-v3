import * as React from 'react';

function Round(props) {

    // handles the props
    const round = props.round;
    const thru = round.scores.length;

    //return the player's total score up to that point in the round
    const totalScore = round.scores.reduce(function (a, b) {
        return a + b;
    }, 0);

    return (
        <tr>
            <td>{round.username}</td>
            <td>{totalScore}</td>
            <td>{thru}</td>
        </tr>
    )
}

export default Round;
