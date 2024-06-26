
document.addEventListener('DOMContentLoaded', ()=>{

    let db = [
        {
            'id': 1,
            'task': 'Pay the bill',
        },
        {
            'id': 2,
            'task': 'get dog food',
        }
    ]

    const inputEl = document.getElementById('task_input')
    const submitBtn = document.getElementById('submit_task')
    const taskList = document.getElementById('task_list')

    function render(task){
        const taskItem = document.createElement('li')
        const taskTitle = document.createElement('span')
        const delBtn = document.createElement('button')

        taskTitle.textContent = task.task
        delBtn.textContent = 'Delete'

        taskItem.appendChild(taskTitle)
        taskItem.appendChild(delBtn)

        taskList.appendChild(taskItem)

        delBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            db = db.filter((t) => t.id !== task.id); // Corrected filter method
        });
    }

    function initTasks(){
        db.forEach(task => render(task))
    }

    initTasks();

    submitBtn.addEventListener('click', ()=>{
        
            let newTask = inputEl.value.trim()
            if (newTask === ''){
                return alert('plz add task')
            }
            console.log(newTask)

            inputEl.value = ''
            addTask(newTask)
        }

    )

    function addTask(newTask){
        const newTaskObj = {
            id: db.length ? db[db.length - 1].id + 1 : 1,
            task : newTask
        };

        db.push(newTaskObj);

        render(newTaskObj);

    }

})