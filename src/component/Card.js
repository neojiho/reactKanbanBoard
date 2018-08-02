import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckList from './CheckList';
import marked from 'marked'; //마크다운 일반텍스트 형식을 이용해 글을 쓰는 형식이다 예를들어 **로 텍스트를 감싸면 굵게 표시된다.

class Card extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			showDetails: false
		};

		this.toggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails() {
		this.setState({showDetails: !this.state.showDetails})
	}

	render() {
		let cardDetails;
		const sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: this.props.color
		};//inline color define

		if (this.state.showDetails) {
			cardDetails = (
				<div className="card_details">
					<span dangerouslySetInnerHTML={{__html: marked(this.props.description)}} />
					<CheckList cardId={this.props.id}
					           tasks={this.props.tasks}
					           taskCallbacks={this.props.taskCallbacks} />
				</div>
			)
		}


		return (
			<div className="card">
				<div style={sideColor} />
				<div className={this.state.showDetails ? 'card_title card_title--is-open' : 'card_title'}
				     onClick={this.toggleDetails}>
					{this.props.title}
				</div>
				{cardDetails}
			</div>
		)
	}

}

//custom title props validation
let titlePropType = (props, propName, componentName) => {
	if (props[propName]) {
		let value = props[propName];
		if (typeof value !== 'string' || value.length > 80) {
			return new Error(
				'${porpName} in ${componentName} is longer than 80 chracters'
			)
		}
	}
};

Card.propTypes = {
	id: PropTypes.number,
	title: titlePropType, //PropTypes.string,
	description: PropTypes.string,
	color: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object
};

export default Card;
