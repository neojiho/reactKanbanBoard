import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

/*
const TestForm = () => (React.DOM.form({className : "commentForm"},
	React.DOM.input({type : "text", placeholder : 'Name'}),
	React.DOM.input({type : "text", placeholder : 'Comment'}),
	React.DOM.input({type : "submit", value : 'Post'})
));
*/

const TestForm = () => {
	const {
		form,
		input
	} = React.DOM;

	return (
		form({className : "commentForm"},
			input({type : "text", placeholder : 'Name'}),
			input({type : "text", placeholder : 'Comment'}),
			input({type : "submit", value : 'Post'})
		)
	)
};

const TestInlineStyle = () => {
	const divStyle = {
		width : 100,
		height : 30,
		padding : 5,
		backgroundColor : '#ee9900'
	};
	return (
		<div style={divStyle} >inline Style</div>
	)
};

class Search extends Component {

	constructor(){
		super();
		this.state = {
			SearchTerm : 'React'
		};
	}

	handleChange(){
		this.setState({SearchTerm: event.target.value})
	}

	render(){
		return (
			<div>
				Search Term : <input type="search" value={this.state.SearchTerm} onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}

class Textarea extends Component {
	constructor(){
		super();
		this.state ={
			textareaValue : "someone"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(){
		this.setState({ textareaValue : event.target.value})
	}

	render(){
		return(
			<div>
				<textarea value={this.state.textareaValue} onChange={this.handleChange}/>
			</div>
		)
	}
}

class Select extends Component {
	constructor (){
		super();
		this.state = {
			selectVal : 'B'
		}
	}

	handleChange(){
		this.setState({selectVal : event.target.value})
	}

	render(){
		return(
			<select value={this.state.selectVal} onChange={this.handleChange.bind(this)}>
				<option value={'A'}>Mobile</option>
				<option value={'B'}>Home</option>
				<option value={'C'}>Work</option>
			</select>
		)
	}

}

class FocusText extends Component {
	handleClick(){
		this.refs.myTextInput.focus(); //클릭 이벤트시 DOM event focus()를 발생
	}

	render(){
		return(
			<div>
				<input type="text" ref='myTextInput' />
				<input type="text" value={'Focus the text input'} onClick={this.handleClick.bind(this)}/>
			</div>
		)
	}
}

//여러 프로퍼티를 export할때는 default를 빼야함.
export {TestForm, TestInlineStyle, Search, Textarea, Select, FocusText};
