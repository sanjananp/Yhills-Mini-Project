document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(li, taskText));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(li));

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function editTask(li, oldTaskText) {
        const newTaskText = prompt('Edit your task:', oldTaskText);
        if (newTaskText !== null) {
            li.firstChild.textContent = newTaskText.trim();
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});