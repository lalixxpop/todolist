
import HeaderComponent from './view/header_component.js';
import FormAddTaskComponent from './view/taskform_component.js';
import TaskBoardComponent from './view/taskboard_component.js';
import TaskListComponent from './view/tasklist_component.js';
import TaskComponent from './view/task_component.js';
import {render, RenderPosition} from './framework/render.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.task-board');
const listContainer = document.querySelector('.task-column');
const taskContainer = document.querySelector('.task');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new TaskBoardComponent(), boardContainer);
render(new FormAddTaskComponent(), formContainer);
render(new TaskListComponent(), listContainer);
render(new TaskComponent(), taskContainer);

