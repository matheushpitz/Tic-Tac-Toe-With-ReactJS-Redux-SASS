const EMPTY_BOARD = '-';

export const play = (board) => {
	let result;
	do {
		result = Math.floor(Math.random() * 9);
	} while(!isMovePossible(board, result));
	
	return result;
}

const isFirstMove = (board) => {		
	return !board.every( (elem) => {
		if(elem !== EMPTY_BOARD)
			return false;
		return true;
	});		
}

const isMovePossible = (board, pos) => {
	return board[pos] === EMPTY_BOARD;
}