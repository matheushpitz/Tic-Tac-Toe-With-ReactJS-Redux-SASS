import { combineReducers } from 'redux';

const initialState = {
	board: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
	canMoves: true,
	playTurn: 0
};

const isBoardDone = (board) => {
    return board.every((elem) => {
        return elem !== '-';
    });
};

const setBoard = (state = initialState, action) => {
	let aux = state.board;
	aux[action.pos] = action.value;		
	return {
	    ...state,
        board: aux.slice(),
        playTurn: state.playTurn === 0 ? 1 : 0,
        canMoves: !isBoardDone(aux)
    };
};

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_BOARD':
			return setBoard(state, action);
		case 'RESET_GAME':
			console.log(JSON.stringify(initialState));
			return {...state}
		default:
			return {...state};
	}	
}

export const Reducers = combineReducers({mainReducer: mainReducer});