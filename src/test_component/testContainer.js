import React, {Component} from 'react';
import {TestForm, TestInlineStyle, Search, Textarea, Select, FocusText} from './testComponents'
import ContactsAppContainer from './testContactsApp';

const TestContainer = () => {

	return (
		<div>this area is for a test-component
			<TestForm />
			<TestInlineStyle />
			<Search />
			<Textarea />
			<Select />
			<FocusText/>
			<ContactsAppContainer />
		</div>
	)
};

export default TestContainer