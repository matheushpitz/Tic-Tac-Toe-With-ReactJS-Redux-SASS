import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBoardAction, resetGame } from '../actions';
import { GameBoard } from './GameBoard';
import { play } from '../ai/TicTacToeAI';

class Game extends React.Component {
	constructor(props) {
		super(props);					
	}
	
	render() {

	    // Verify if is the AI's turn
	    if(this.props.playTurn === 1)
	        this.callAIPlay();
	    // Verify if the game is ended.
	    if(!this.props.canMoves)
	        this.props.resetGame();

		return(			
			<GameBoard boardValues={this.props.boardValues} onClick={(pos) => this.clickBoardHandle(pos)} />			
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
	    play(this.props.boardValues, (pos, value) => {
	        this.setBoardValue(pos, value);
        });
    }
}

const mapStateToProps = store => ({
	boardValues: store.mainReducer.board,
	playTurn: store.mainReducer.playTurn,
    canMoves: store.mainReducer.canMoves
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setBoardAction, resetGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);