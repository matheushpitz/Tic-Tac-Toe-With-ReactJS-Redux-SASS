import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBoardAction } from '../actions';
import { GameBoard } from './GameBoard';
import { play } from '../ai/TicTacToeAI';

class Game extends React.Component {
	constructor(props) {
		super(props);					
	}
	
	render() {		
		return(			
			<GameBoard boardValues={this.props.boardValues} onClick={(pos) => this.clickBoardHandle(pos)} />			
		);
	}
	
	setBoardValue(pos, value) {
		this.props.setBoardAction(pos, value);		
	}
	
	clickBoardHandle(pos) {
		this.setBoardValue(pos, 'X');
	}
}

const mapStateToProps = store => ({
	boardValues: store.mainReducer.board
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setBoardAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);