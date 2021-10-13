// 把input的文字作為待辦事項加入到下方區塊
function addTodo (event) {
    // 阻止事件預設行為
    event.preventDefault()
    //  query selector => 透過類似CSS語法找出特定的元素
    // 選取輸入欄這個元素
    let todoInput = document.querySelector('#todo-field')
    // input元素.value => 輸入欄位目前的值
    // input text 預設資料形態是 String
    // String.trim 函數 可以刪除多餘的空格
    // e.g. '  1  ' => '1', '          2' => '2'
    let todoName = todoInput.value.trim()
    // 判斷輸入文字是否爲空
    if (!todoName) {
        alert('待辦名稱不能爲空')
        // break // if 裏面不能用 break
        return // 等於立刻結束函數回傳 undefined
    }
    // 選取#todo-list這個元素
    let todoList = document.querySelector('#todo-list')
    // 建立一個 p 元素(容器)
    let newTodo = document.createElement('p')
    // 建立待辦的標題元素
    let newTodoTitle = document.createElement('span')
    // 建立複選方塊的元素
    let newTodoCheckbox = document.createElement('input')
    // 將複選方塊元素的type改成checkbox讓他顯示爲方塊
    newTodoCheckbox.type = "checkbox"
    // 把勾選方塊元素的 onchange 綁定到 checkTodo 這個函數
    newTodoCheckbox.onchange = function () { checkTodo(newTodo) } // 函數
    // 將標題元素的文字內容設定爲 todoName(用戶輸入的內容)
    newTodoTitle.innerText = todoName
    // 把複選方塊加進 newTodo 這個 p 元素
    newTodo.appendChild(newTodoCheckbox)
    // 把標題元素(span)加進 newTodo 這個 p 元素
    newTodo.appendChild(newTodoTitle)
    todoList.appendChild(newTodo)
    // 把輸入框的值設定爲 null
    todoInput.value = null // 資料綁定 => 只要資料改變, 畫面就跟著改變
    // input類元素.focus() --> 將游標的焦點放在該元素上(幫你點他)
    todoInput.focus()
}

// (c1版)
// function addTodo (event) {
//     event.preventDefault()
//     let todoInput = document.querySelector('#todo-field')
//     let todoName = todoInput.value
//     if (!todoName.trim()) {
//         alert('待辦事項內容不能是空白!')
//         return false
//     }
//     let newTodo = document.createElement('p')
//     let newTodoCheckbox = document.createElement('input')
//     newTodoCheckbox.type = "checkbox"
//     let newTodoTitle = document.createElement('span')
//     newTodoTitle.innerText = todoName
//     newTodo.appendChild(newTodoCheckbox)
//     newTodo.appendChild(newTodoTitle)
//     newTodoCheckbox.onchange = function () { checkTodo(newTodo) }
//     let todoForm = document.querySelector('#todo-form')
//     let todoList = document.querySelector('#todo-list')
//     todoList.appendChild(newTodo)
//     todoInput.value = null
//     todoInput.focus()
// }

// (c2版)
// function triggerAddingTodo (event) {
//     event.preventDefault()
//     let todoInput = document.querySelector('#todo-field')
//     let todoName = todoInput.value.trim()
    
//     addTodo(todoName)

//     todoInput.value = null
//     todoInput.focus()
// }

// function addTodo (name, done = false) {
//     if (!name) {
//         alert('待辦事項內容不能是空白!')
//         return false
//     }
//     let newTodo = document.createElement('p')
//     let newTodoCheckbox = document.createElement('input')
//     newTodoCheckbox.type = "checkbox"
//     let newTodoTitle = document.createElement('span')
//     newTodoTitle.innerText = name
//     newTodo.appendChild(newTodoCheckbox)
//     newTodo.appendChild(newTodoTitle)
//     if (done) {
//         newTodoCheckbox.checked = true
//         checkTodo(newTodo)
//     } else {
//         newTodoCheckbox.onchange = function () { checkTodo(newTodo) }
//     }
//     let todoForm = document.querySelector('#todo-form')
//     let todoList = document.querySelector('#todo-list')
//     todoList.appendChild(newTodo)
// }

// 將待辦改爲完成狀態, 參數: 待辦元素(DOM) p 元素
function checkTodo (todo) {
    // DOM.classList.add(x) --> 替特定元素增加名稱爲 x 的 class
    todo.classList.add('completed-todo')
    // 將勾選方塊的 disabled 屬性設定爲 true 以防止又被反勾
    todo.children[0].disabled = true
}

// 點了框框之後顯示已完成 (c版)
// function checkTodo (todo) {
//     todo.classList.add('completed-todo')
//     todo.children[0].disabled = true
// }

// 讀取初始 todo 內容 (c版)
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/todos.json')
//         .then(result => result.json())
//         .then(jsonData => {
//             jsonData.forEach(todo => {
//                 addTodo(todo.name, todo.done)
//             })
//         })
//         .catch(error => {
//             console.log(error)
//             console.log('出錯囉, 可能是因爲json檔不存在')
//         })
// })