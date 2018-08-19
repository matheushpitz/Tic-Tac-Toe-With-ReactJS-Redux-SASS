import { combineReducers } from 'redux';

const initialState = {
	board: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
};

const setBoard = (state = initialState, action) => {
	let aux = state.board;
	aux[action.pos] = action.value;		
	return {...state, board: aux.slice()};
};

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_BOARD':
			return setBoard(state, action);
		default:
			return {...state};
	}	
}

export const Reducers = combineReducers({mainReducer: mainReducer});