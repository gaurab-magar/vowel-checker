let inputValue = document.getElementById('taskInput');
let addButton = document.getElementById('addBtn');
let listGroup = document.querySelector('.list-group');

addButton.addEventListener('click',function(){
    const newTodo = inputValue.value;
    if(newTodo !== ""){
        const liItem = document.createElement('li');
        liItem.classList.add("list-group-item", "border-0" ,"mt-3","fw-bold","d-flex","justify-content-between","align-items-center");
        liItem.innerText = newTodo;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn","btn-danger","btn-scale-on-hover");
        deleteBtn.textContent = "DEL"
        deleteBtn.addEventListener('click',function(){
            liItem.remove();
        })
        liItem.appendChild(deleteBtn);
        listGroup.appendChild(liItem);
        inputValue.value = "";
    }


})