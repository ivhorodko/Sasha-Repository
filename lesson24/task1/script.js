function addTask() {
    let input = document.getElementById('task-input');
    let taskText = input.value;

    if (taskText !== '') {
        let li = document.createElement('li');
        li.textContent = taskText;

        let taskList = document.getElementById('task-list');
        taskList.appendChild(li);

        input.value = '';
    }
}