const taskInput=document.getElementById("task-input");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
function addTask() {
const taskText=taskInput.value.trim();
   if (taskText===""){
        alert("please enter a text");
        return;
    }
    const li=document.createElement("li");
    li.textContent=taskText;
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function(event){
        event.stopPropagation();
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value="";
    }
    addBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function(event){
        if(event.key==="Enter"){
            addTask();
        }
    });
