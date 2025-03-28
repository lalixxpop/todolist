import { createElement } from '../framework/render.js';

function createTaskTemplate(text, className) {
    return `
    <div class="task ${className}">${text}</div>
    `;
}

export default class TaskComponent {
    constructor(text, className) {
        this.element = null;
        this.text = text;
        this.className = className;
    }

    getTemplate() {
        return createTaskTemplate(this.text, this.className);
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}