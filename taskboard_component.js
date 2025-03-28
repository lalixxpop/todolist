import { createElement } from '../framework/render.js';
import TaskListComponent from './tasklist_component.js';

function createTaskBoardTemplate() {
    return `
    <div class="task-board"></div>
    `;
}

export default class TaskBoardComponent {
    constructor() {
        this.element = null;
        this.columns = [
            { title: 'Бэклог', className: 'backlog' },
            { title: 'В процессе', className: 'in-progress' },
            { title: 'Готово', className: 'done' },
            { title: 'Корзина', className: 'trash' }
        ];
    }

    getTemplate() {
         return createTaskBoardTemplate();

    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());

           
            this.columns.forEach(column => {
                const taskList = new TaskListComponent(column.title, column.className);
                this.element.appendChild(taskList.getElement());
            });
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}