import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Hello from './Hello';


console.log(React)

class GroceryList extends React.Component {

	render () {
		let some = document.createElement('span');
		some.textContent = '자식자식';
		let someText = '테스트'
		return (
			<ul>
				<ListItem quantity="1">{someText}</ListItem>
				<ListItem quantity="6">Egg</ListItem>
				<ListItem quantity="2">Milk</ListItem>
			</ul>
		)
	}

}

class ListItem extends React.Component {

	render(){
		return (
			<li>
				{this.props.quantity} x {this.props.children}
			</li>
		)
	}

}



render(<GroceryList/>, document.querySelector("#root"));

/*
render(<Greeter />, document.getElementById('root'));
render(<Hello />, document.getElementById('root2'));*/
