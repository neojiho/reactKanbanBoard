import React, {Component} from 'react'

class Hello extends Component {
	constructor(){
		super();
	}


	render () {
		let x = "World";
		return (
			<h1> Hello {x}</h1>
		)

	}

}

export default Hello;