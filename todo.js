function addTodo (event) {
    event.preventDefault()
    let todoInput = document.querySelector('#todo-field')
    let todoName = todoInput.value
    if (!todoName.trim()) {
        alert('待辦事項內容不能是空白!')
        return false
    }
    let newTodo = document.createElement('p')
    let newTodoCheckbox = document.createElement('input')
    newTodoCheckbox.type = "checkbox"
    let newTodoTitle = document.createElement('span')
    newTodoTitle.innerText = todoName
    newTodo.appendChild(newTodoCheckbox)
    newTodo.appendChild(newTodoTitle)
    newTodoCheckbox.onchange = function () { checkTodo(newTodo) }
    let todoForm = document.querySelector('#todo-form')
    let todoList = document.querySelector('#todo-list')
    todoList.appendChild(newTodo)
    todoInput.value = null
    todoInput.focus()
}

function checkTodo (todo) {
    todo.classList.add('completed-todo')
    todo.children[0].disabled = true
}