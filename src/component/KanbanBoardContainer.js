import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';


const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADER = {
	'Content-Type': 'application/json',
	Authorization: 'any-string-you-like' //로컬 서버의 경우 권한을 부여할 필요없다.
};

//conatiner는 항상 해당 component의 데이터와 이벤트등의 연관을 설정하는 부모역할을 하는 component로 만드는 편임.

class KanbanBoardContainer extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			cards: []
		}
	}

	componentDidMount() {
		fetch(API_URL + '/cards', {headers: API_HEADER}) //fetch의 두번째인자에 method, mode, cache, credentials, header,
		// redirect, refer, body와 같은 정보 객체를 보낸다 쓰기를 할경우 body에 JSON.stringfy(data)와 같이 전달해줌..
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log("kanbanBoardData", data);
				this.setState({cards: data})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	addTask(cardId, taskName) {

	}

	deleteTask(cardId, taskId, taskIndex) {

	}

	toggleTask(cardId, taskId, taskIndex) {

	}

	render() {
		return (
			<KanbanBoard cards={this.state.cards}
			             taskCallbacks={{
				             toggle: this.toggleTask.bind(this),
				             delete: this.deleteTask.bind(this),
				             add: this.addTask.bind(this)
			             }} />
		)
	}
}

export default KanbanBoardContainer;