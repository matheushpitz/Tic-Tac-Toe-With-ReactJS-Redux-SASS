import React, { Component } from 'react';
import logo from './logo.svg';
import './style/build/index.css';
import Game from './components/Game';

class App extends Component {
	
	constructor(props) {
		super(props);		
	}
	
	render() {
		return (
			<div className="App">
				<Game />
			</div>
		);
	}
}

export default App;
