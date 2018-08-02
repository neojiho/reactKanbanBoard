import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {

	checkInputKeyPress(event) {
		/*
		console.log(event, event.key);
		event.persist();
		console.log(event, event.key);
		여기서 넘겨진 event는 리엑트가 브라우저의 native event를감싼 syntheticEvent라서 모든 프로퍼티가 null처리 되어있다. 이를 확인하려면 event.persist()를
		 실행해야 강제로 볼수있도록 한다.
		*/
		if (event.key === 'Enter') {
			this.props.taskCallbacks.add(this.props.cardId, event.target.value);
			event.target.value = '';
		}
	}

	render() {
		let tasks = this.props.tasks.map((task, taskIndex) => (
			<li key={task.id} className="checklist_task">
				<input type="checkbox" defaultChecked={task.done}
				       onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
				/>
				{task.name}{' '}
				<a href="#" className="checklist_task--remove"
				   onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}
				/>
			</li>
		));

		return (
			<div className='checklist'>
				<ul>{tasks}</ul>
				<input type='text'
				       className='checklist--add-task'
				       placeholder='Type then hit Enter to add a task'
				       onKeyPress={this.checkInputKeyPress.bind(this)}
				/>
			</div>
		);

	}

}

CheckList.propTypes = {
	cardId: PropTypes.number,
	tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;