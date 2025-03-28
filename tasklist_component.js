import { createElement } from '../framework/render.js';
import TaskComponent from './task_component.js';

function createTaskListTemplate(title, className) {
    return `
        <div class="task-column">
            <div class="section-title ${className}-title">${title}</div>
            <div class="task-container ${className}"></div>
        </div>
    `;
}

export default class TaskListComponent {
    constructor(title, className) {
        this.element = null;
        this.title = title;
        this.className = className;
        this.tasks = ["Задача 1","Задача 2","Задача 3"];
    }

    addTask(taskText) {
        this.tasks.push(taskText);
        if (this.element) {
            const task = new TaskComponent(taskText, this.className);
            this.element.querySelector(`.${this.className}`).appendChild(task.getElement());
        }
    }

    getTemplate() {
        return createTaskListTemplate(this.title, this.className);
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());

            this.tasks.forEach(taskText => {
                const task = new TaskComponent(taskText, this.className);
                this.element.querySelector(`.${this.className}`).appendChild(task.getElement());
            });
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}