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
        <div className={'score-board'}>
            <div className={'score'}>
                <div className={'player-score'}>
                    <p>You {props.score[0]}</p>
                </div>
                <div className={'computer-score'}>
                    <p>{props.score[1]} Computer</p>
                </div>
            </div>
            <div className={'message-state'}>
                <p>{gameMessage}</p>
            </div>
        </div>
    );
};