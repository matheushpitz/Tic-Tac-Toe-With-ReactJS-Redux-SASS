import React from 'react';

export const BoardSpace = (props) => {
	return(
		<button onClick={ () => props.onClick(props.pos) }>{props.value}</button>
	);
}