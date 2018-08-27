import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBoardAction, resetGame } from '../actions';
import { GameBoard } from './GameBoard';
import { ScoreBoard } from './ScoreBoard';
import { play } from '../ai/TicTacToeAI';

class Game extends React.Component {
	constructor(props) {
		super(props);					
	}
	
	render() {
		console.log(this.props.score);
        // Verify if the game is ended.
        if(this.props.gameState === 0) {
            // Verify if is the AI's turn
            if (this.props.playTurn === 1)
                this.callAIPlay();
        } else {
            this.resetGame();
		}

		return(
		    <div className={'game'}>
		        <ScoreBoard score={this.props.score} turn={this.props.playTurn} state={this.props.gameState} />
			    <GameBoard boardValues={this.props.boardValues} onClick={(pos) => this.clickBoardHandle(pos)} />
            </div>
		);
	}
	
	setBoardValue(pos, value) {
		this.props.setBoardAction(pos, value);
	}
	
	clickBoardHandle(pos) {
		if(this.props.playTurn === 0) {
            this.setBoardValue(pos, 'X');
        }
	}

	callAIPlay() {
	    play(this.props.boardValues)
            .then( (param) =>  this.setBoardValue(param.pos, param.value));
    }

    resetGame() {
	    setTimeout(this.props.resetGame, 1000);
    }
}

const mapStateToProps = store => ({
	boardValues: store.mainReducer.board,
	playTurn: store.mainReducer.playTurn,
    gameState: store.mainReducer.gameState,
	score: store.mainReducer.score
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setBoardAction, resetGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);