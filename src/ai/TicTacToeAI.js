const EMPTY_BOARD = '-';

export const play = (board, callback) => {
	setTimeout(() => {
		let pos;
		do {
			pos = Math.floor(Math.random() * 9);
		} while(!isMovePossible(board, pos));
		
		callback(pos, 'O');	
	}, Math.random() * 3000);	
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