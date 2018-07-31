import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';

class KanbanBoard extends Component {
	render(){
		return(
			<div className ='app'>
				<List id='todo' title='To Do' cards={this.props.cards.filter((card) => card.status === 'todo')} />

				<List id='in-progress' title='In Progress' cards={this.props.cards.filter((card) => card.status === 'in-progress')} />

				<List id='done' title='Done' cards={this.props.cards.filter((card) => card.status === 'done')} />
			</div>
		);
	}

}

KanbanBoard.propTypes = {
	card : PropTypes.arrayOf(PropTypes.object)
};

export default KanbanBoard;