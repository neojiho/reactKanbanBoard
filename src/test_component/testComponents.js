import React,{Component} from 'react';
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




//여러 프로퍼티를 export할때는 default를 빼야함.
export {TestForm};
