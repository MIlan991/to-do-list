let taskEl = document.getElementById("task-el");
let tasksListEl = document.getElementById("tasks-list");

const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementsByClassName("remove-btn")


addBtn.addEventListener('click', function(){
    let taskAdd = taskEl.value;

    if(taskAdd === ''){
        return null;
    } else {
        tasksListEl.innerHTML += 
        `<li class="done">
        <p>${taskAdd}</p>
        <button class="remove-btn">X</button>
        </li>`;

        let taskDone = document.querySelectorAll(".done");
        for(let i = 0; i < taskDone.length; i++) {
            taskDone[i].onclick = function() {
                this.classList.toggle('task-done')
            }
        }

        let removeTask = document.querySelectorAll(".remove-btn");
        for(let i = 0; i < removeTask.length; i++) {
            removeTask[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
});



