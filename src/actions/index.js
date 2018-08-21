export const setBoardAction = (pos, value) => ({
	type: 'SET_BOARD',
	value: value,
	pos: pos
});

export const resetGame = () => ({
	type: 'RESET_GAME'
});