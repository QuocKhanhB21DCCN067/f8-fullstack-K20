const addBtnEle = document.querySelector("#add-btn")

function updateCount() {
    const textTodo = document.querySelectorAll(".text-todo:not(.line-through)")
    const count = document.querySelector(".count")
    count.textContent = textTodo.length
}

document.addEventListener("click", (event) => {
    if (event.target.closest("#add-btn")) {
        const textInputEle = document.querySelector("#todo-input")
        if (textInputEle.value.trim() === "") {
            textInputEle.value = ""
            return ;
        }
        const todoListEle = document.querySelector("#todo-list")
        todoListEle.insertAdjacentHTML('afterbegin', `
            <li class="todo-item">
                <span class="text-todo">${textInputEle.value}</span>
                <button class="delete-todo">Xoá</button>
            </li>
        `)

        textInputEle.value = ""
        updateCount()
    }

    if (event.target.closest(".delete-todo")) {
        const todoItemEle =  event.target.closest(".todo-item")
        todoItemEle.remove()
        updateCount()
    }

    if (event.target.closest(".text-todo")) {
        const textTodoEle = event.target.closest(".text-todo")
        textTodoEle.classList.toggle("line-through")
        updateCount()     
    }
})