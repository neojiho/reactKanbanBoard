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
		console.log('addTask', arguments);
		//카드 인덱스 찾기
		let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

		//card ID를 기반으로 지정된 이름과 임의의 ID로 새로운 태스크를 생성함.
		let tasks = this.state.cards[cardIndex]['tasks'],
			taskLength = tasks.length,
			lastId = tasks[taskLength - 1]["id"];

		const newTask = {
			id: (lastId + 1),
			name: taskName,
			done: false
		};

		//태스크 추가
		const extendsTask = [...tasks, ...[newTask]];

		//상태변경
		this.setState((prevState) => {
			prevState.cards[cardIndex].tasks = extendsTask;
			return prevState;
		});

		//API호출
		fetch(`${API_URL}/cards/${cardId}/tasks`, {
			method: 'post',
			headers: API_HEADER,
			body: JSON.stringify(newTask) //new task를 보내본다. extendsTask를 보내면 안된다.
		})
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				//이짓을 하는 이유는 서버에서 ID가 유효한지 확정여부를 알아야 하기때문.
				newTask.id = data.id;
				console.log(data);
				this.setState((prevState) => {
					prevState.cards[cardIndex].tasks = extendsTask;
					return prevState;
				});
			})

	}

	deleteTask(cardId, taskId, taskIndex) {

		console.log('deleteTask', arguments);

		//card의 id를 바탕으로  index를 찾음.
		let cardIndex = this.state.cards.findIndex((card) => (card.id === cardId));

		// let nextState = update(this.state.cards, {
		// 	[cardIndex] : {
		// 		task : {$splice : [[taskIndex, 1]]}
		// 	}
		// });

		//이전객체를 받아 직접수정 불변객체로 수정하지 않음.
		this.setState((prevState) => {
			return prevState["cards"][cardIndex]["tasks"].splice(taskIndex, 1);
			//splice는 값을 새로생성하여 리턴하므로 가능한듯
		});

		//API호출하여 해당 태스크를 제거함.
		fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
			method: 'delete',
			headers: API_HEADER
		})

	}

	toggleTask(cardId, taskId, taskIndex) {
		console.log('toggleTask', arguments, this);
		//카드 인덱스 찾기
		let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
		let completeDoneValue;

		//상태변경
		this.setState((prevState) => {

			let doneValue = prevState["cards"][cardIndex]["tasks"][taskIndex]["done"];

			doneValue = !doneValue;
			completeDoneValue = doneValue;
			return prevState
		}, () => {
			//setState이 모두 완료된 이후시점에 API로 서버에 전달
			fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
				method: 'put',
				headers: API_HEADER,
				body: JSON.stringify({done: completeDoneValue})
			});
		});


	}

	render() {
		return (
			<KanbanBoard cards={this.state.cards}
			             taskCallbacks={{//event 관련된 함수를 넘길때는 객체로 감싸넘기는것도 좋다.
				             toggle: this.toggleTask.bind(this),
				             delete: this.deleteTask.bind(this),
				             add: this.addTask.bind(this)
			             }} />
		)
	}
}

export default KanbanBoardContainer;