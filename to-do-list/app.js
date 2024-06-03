
// initialise the app

// Retrieve todo from local storage 

let todo = JSON.parse(localStorage.getItem('todo')) || [];
const todoInput = document.getElementById('todoInput');
const todolist = document.getElementById('todoList');
const todoCount =  document.getElementById('todoCount');
const addBtn = document.getElementById('addbtn');
const delBtn = document.getElementById('delBtn');


// Initialize

document.addEventListener('DOMContentLoaded', function(){
    addBtn.addEventListener('click', addTask());
    todoInput.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            addTask();
        }
    })
})

function addTask() {
    // 
    
}