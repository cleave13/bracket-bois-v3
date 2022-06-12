import * as React from 'react';

function Round(props) {
    const round = props.round;

    return (
        <tr>
            <td>{round.player}</td>
            <td>{round.netScore}</td>
            <td>{round.thru}</td>      
        </tr>
    )
}

export default Round;
