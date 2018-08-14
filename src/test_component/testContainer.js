import React, {Component} from 'react';
import {TestForm, TestInlineStyle, Search, Textarea, Select, FocusText} from './testComponents'
import ContactsAppContainer from './testContactsApp';
import AnimatedShoppingList from './testAnimatedShoppingList';
import SnackContainer from './testSnackContainer';

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
			<SnackContainer />
		</div>
	)
};

export default TestContainer