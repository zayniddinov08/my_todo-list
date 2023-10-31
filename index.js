const ellist = selectelem(".list")
const eltemplate = selectelem(".template").content
const elform = selectelem(".form")
const elforminput = selectelem(".form_input", elform)

let todosArr = JSON.parse(window.localStorage.getItem("todos")) || []
const checktodo = (e) =>{
    let dataid = e.target.dataset.id
    let faundcheck = todosArr.find(item => item.id == dataid)
    faundcheck.isCompleted = !faundcheck.isCompleted
    renderTodos(todosArr, ellist)

window.localStorage.setItem("todos", JSON.stringify(todosArr))
}

const edittodo = (e) =>{
    let dataid = e.target.dataset.id
    let foundedit = todosArr.find(item => item.id == dataid)
    foundedit.content = prompt("yangi xabarni kiriting")
    renderTodos(todosArr, ellist)

window.localStorage.setItem("todos", JSON.stringify(todosArr))
}

const delateTodo = (e) =>{
    let dataid = e.target.dataset.id
    let foundindex = todosArr.findIndex(item => item.id == dataid)
    todosArr.splice(foundindex, 1)
    renderTodos(todosArr, ellist) 

    window.localStorage.setItem("todos", JSON.stringify(todosArr))
}

function renderTodos(arr, list){
    ellist.innerHTML = null
    arr.map(item => {
        let cloneTemplate = eltemplate.cloneNode(true)
        let listitemcontent = selectelem(".list_item-content", cloneTemplate)
        let listitemdelate = selectelem(".list_item-btn", cloneTemplate)
        let listitemedit = selectelem(".list_item-edit", cloneTemplate)
        let todocheck = selectelem(".list_item-input", cloneTemplate)

        if(item.isCompleted == true){
            listitemcontent.style = "text-decoration: line-through; opacity: 0.5; font-size: 15px"
            todocheck.checked = true
        }

        listitemcontent.textContent = item.content
        listitemdelate.dataset.id = item.id
        listitemedit.dataset.id = item.id
        todocheck.dataset.id = item.id

        listitemedit.addEventListener("click", edittodo)
        listitemdelate.addEventListener("click", delateTodo)
        todocheck.addEventListener("change", checktodo)

        ellist.appendChild(cloneTemplate)
    })
    
}

renderTodos(todosArr, ellist)

elform.addEventListener("submit", (e) =>{
    e.preventDefault()
    let inputvalue = elforminput.value.trim()

    todosArr.push({
        id: todosArr.length,
        content: inputvalue,
        isCompleted: false
    })

renderTodos(todosArr)

window.localStorage.setItem("todos", JSON.stringify(todosArr))

windov.locolstore
    
    elforminput.value.null
    elforminput.focus()
})