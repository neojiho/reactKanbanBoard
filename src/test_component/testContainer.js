import React, {Component} from 'react';
import {TestForm, TestInlineStyle, Search, Textarea, Select, FocusText} from './testComponents'
import ContactsAppContainer from './testContactsApp';
import AnimatedShoppingList from './testAnimatedShoppingList';

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
			<AnimatedShoppingList />
		</div>
	)
};

export default TestContainer