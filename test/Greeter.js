
import React, {Component} from 'react';
// import config from './config.json';


class Greeter extends Component {
	constructor (){
		super();
	}

	render (){
		console.log(React)
		console.dir(Component)
		return (
			<div>
				'greetings it's works!!'
			</div>
		)
	}

}

export default Greeter;