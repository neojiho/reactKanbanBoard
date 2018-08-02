/*
* entry point of react application
* */

import React from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from './component/KanbanBoardContainer';
import TestContainer from './test_component/testContainer';

render(<KanbanBoardContainer />, document.getElementById('root'));
render(<TestContainer />, document.getElementById('testRoot'));

