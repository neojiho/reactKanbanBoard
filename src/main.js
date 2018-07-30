/*
* entry point of react application
* */

import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './component/KanbanBoard';
import TestComponents from './test_component/testIndex';

let cardsList = [
	{
		id : 1,
		title : 'Read the Book',
		description : "I shoud read the **whole** book",
		status : "in-progress",
		tasks : []
	},
	{
		id: 2,
		title : "write some code",
		description : "Code along with the samples in the book. The complete source can be found at" +
		" [github](https://github.com/pro-react)",
		status : "todo",
		tasks : [
			{
				id : 1,
				name : "ContactList Example",
				done : true
			},
			{
				id : 2,
				name : 'Kanban Example',
				done : false
			},
			{
				id : 3,
				name : "My own experiments",
				done : false
			}
		]
	}
];



render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
render(<TestComponents />, document.getElementById('testRoot'));

