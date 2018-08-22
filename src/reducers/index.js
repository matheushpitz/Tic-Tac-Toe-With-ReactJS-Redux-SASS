import { combineReducers } from 'redux';
/*
    gameState is the state of the game. It can be these values:
    0 -> normal game
    1 to 8 -> Someone wins the game.
    -1 -> nobody wins the game
 */
const initialState = {
	board: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
	gameState: 0,
	playTurn: 0
};

const checkGameState = (board) => {
	if(board[0] !== '-' && board[0] === board[1] && board[1] === board[2]) {
		return 1;
	} else if(board[3] !== '-' && board[3] === board[4] && board[4] === board[5]) {
        return 2;
	} else if(board[6] !== '-' && board[6] === board[7] && board[7] === board[8]) {
        return 3;
    } else if(board[0] !== '-' && board[0] === board[3] && board[3] === board[6]) {
        return 4;
    } else if(board[1] !== '-' && board[1] === board[4] && board[4] === board[7]) {
        return 5;
    } else if(board[2] !== '-' && board[2] === board[5] && board[5] === board[8]) {
        return 6;
    } else if(board[0] !== '-' && board[0] === board[4] && board[4] === board[8]) {
        return 7;
    } else if(board[6] !== '-' && board[6] === board[4] && board[4] === board[2]) {
        return 8;
    } else {
		return board.every((elem) => {
			return elem !== '-';
		}) ? -1 : 0;
	}
};

const setBoard = (state = initialState, action) => {
	let aux = state.board;
	aux[action.pos] = action.value;		
	return {
	    ...state,
        board: aux.slice(),
        playTurn: state.playTurn === 0 ? 1 : 0,
        gameState: checkGameState(aux)
    };
};

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_BOARD':
			return setBoard(state, action);
		case 'RESET_GAME':
			return {...state,
                board: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
                gameState: 0};
		default:
			return {...state};
	}	
}

export const Reducers = combineReducers({mainReducer: mainReducer});