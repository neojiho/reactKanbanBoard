import React, {Component} from 'react';
import {TestForm, TestInlineStyle, Search, Textarea, Select, FocusText} from './testComponents'
import ContactsAppContainer from './testContactsApp';
import AnimatedShoppingList from './testAnimatedShoppingList';

const TestContainer = () => {

	return (
		<div>
			<h2>below is test-component area for many examples</h2>
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