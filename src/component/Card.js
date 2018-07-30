import React, {Component} from 'react';
import CheckList from './CheckList';
import marked from 'marked'; //마크다운 일반텍스트 형식을 이용해 글을 쓰는 형식이다 예를들어 **로 텍스트를 감싸면 굵게 표시된다.

class Card extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			showDetails : false
		};

		this.toggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails(){
		this.setState({showDetails : !this.state.showDetails})
	}

	render(){
		let cardDetails;
		if (this.state.showDetails) {
			cardDetails = (
				<div className="card_details">
					<span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			)
		}
		return (
			<div className="card">
				<div className={this.state.showDetails? 'card_title card_title--is-open' : 'card_title'} onClick={this.toggleDetails}>
					{this.props.title}
				</div>
				{cardDetails}
			</div>
		)
	}

}

export default Card;
