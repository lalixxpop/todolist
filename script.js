document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".add-btn");
    const inputField = document.querySelector("#task-input");
    const backlogSection = document.querySelector(".backlog");

    addButton.addEventListener("click", function() {
        let taskText = inputField.value.trim();
        if (taskText !== "") {
            let task = document.createElement("div");
            task.classList.add("task");
            task.textContent = taskText;
            backlogSection.appendChild(task);
            inputField.value = "";
        }
    });

    document.querySelector(".clear-btn").addEventListener("click", function() {
        const trashSection = document.querySelector(".trash");
        trashSection.innerHTML = '<h2>Корзина</h2><button class="clear-btn">✖ Очистить</button>';
    });
});