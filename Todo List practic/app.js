// make todo list
let todoList = [];
let todoInput = document.getElementById('todoInput');
let todoButton = document.getElementById('todoButton');
let todoUl = document.getElementById('todoUl');

todoButton.addEventListener('click', function() {
    let todoText = todoInput.value;
    if (todoText !== '') {
        let todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        // Create add button
        let addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('btn', 'btn-success', 'btn-sm', 'ml-2');
        addButton.addEventListener('click', function() {
            let newTodoText = prompt('Enter new todo item:');
            if (newTodoText !== '') {
                let newTodoItem = document.createElement('li');
                newTodoItem.textContent = newTodoText;
                newTodoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                todoUl.appendChild(newTodoItem);
                todoList.push(newTodoText);
            }
        });

        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
        deleteButton.addEventListener('click', function() {
            todoUl.removeChild(todoItem);
            todoList = todoList.filter(item => item !== todoText);
        });

        todoItem.appendChild(addButton);
        todoItem.appendChild(deleteButton);
        todoUl.appendChild(todoItem);
        todoList.push(todoText);
        todoInput.value = '';
    }
});
