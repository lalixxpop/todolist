import { createElement } from '../framework/render.js';

function createTaskFormTemplate() {
    return `
        <div class="new-task">
            <h2>Новая задача</h2>
            <input id="task-input" type="text" placeholder="Название задачи...">
            <button class="add-btn">+ Добавить</button>
        </div>
    `;
}

export default class TaskFormComponent {
    constructor(addTaskCallback) {
        this.element = null;
        this.addTaskCallback = addTaskCallback;
    }

    getTemplate() {
        return createTaskFormTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());

            this.element.querySelector('.add-btn').addEventListener('click', () => {
                const input = this.element.querySelector('#task-input');
                if (input.value.trim()) {
                    this.addTaskCallback(input.value.trim());
                    input.value = '';
                }
            });
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}
