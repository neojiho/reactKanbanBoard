import React, {Component} from 'react';
import {TestForm, TestInlineStyle, Search, Textarea, Select, FocusText} from './testComponents'

const TestComponents = () => {

	return (
		<div>this area is for a test-component
			<TestForm />
			<TestInlineStyle />
			<Search />
			<Textarea />
			<Select />
			<FocusText/>
		</div>
	)
};

export default TestComponents