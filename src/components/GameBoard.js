import React from 'react';
import { BoardSpace } from './BoardSpace';

export const GameBoard = (props) => {
	return(		
		<div>
			<div>
				<BoardSpace pos={0} value={props.boardValues[0]} onClick={props.onClick} />
				<BoardSpace pos={1} value={props.boardValues[1]} onClick={props.onClick} />
				<BoardSpace pos={2} value={props.boardValues[2]} onClick={props.onClick} />
			</div>
			<div>
				<BoardSpace pos={3} value={props.boardValues[3]} onClick={props.onClick} />
				<BoardSpace pos={4} value={props.boardValues[4]} onClick={props.onClick} />
				<BoardSpace pos={5} value={props.boardValues[5]} onClick={props.onClick} />
			</div>
			<div>				
				<BoardSpace pos={6} value={props.boardValues[6]} onClick={props.onClick} />
				<BoardSpace pos={7} value={props.boardValues[7]} onClick={props.onClick} />
				<BoardSpace pos={8} value={props.boardValues[8]} onClick={props.onClick} />
			</div>
		</div>
	);
}