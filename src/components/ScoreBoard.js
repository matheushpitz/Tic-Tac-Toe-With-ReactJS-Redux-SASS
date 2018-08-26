import React from 'react';

export const ScoreBoard = (props) => {
    let gameMessage = undefined;
    if(props.state === 0) {
        gameMessage = props.turn === 0 ? 'Your turn' : 'Computer\'s turn';
    } else if(props.state === -1) {
        gameMessage = 'Tie';
    } else {
        gameMessage = props.turn === 0 ? 'Computer won the round' : 'You won the round';
    }
    return(
        <div>
            <p>You {props.score[0]}</p>
            <p>Computer {props.score[1]}</p>
            <p>{gameMessage}</p>
        </div>
    );
};