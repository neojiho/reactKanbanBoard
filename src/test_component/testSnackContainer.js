import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd' // drag & drop
import HTML5Backend from 'react-dnd-html5-backend'


class SnackContainer extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<div>
				<h3>Snack drag & drop example</h3>
			</div>
		)
	}

}

export default SnackContainer;