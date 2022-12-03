document.addEventListener("DOMContentLoaded",()=> {
  document.querySelector('form').addEventListener("submit",function(e){
    e.preventDefault();
    addToDo(e.target.new_task_description.value);
  })
})
function addToDo(todo){
  let ToDoList = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click",handleDelete)
  ToDoList.textContent=`${todo}`
  btn.textContent="Delete"
  ToDoList.appendChild(btn)
  document.querySelector("#tasks").appendChild(ToDoList)
}
function handleDelete(e){
  e.target.parentNode.remove();
}


//const submitButton = document.getElementById('submitButton');

//function addToDo(){
 // let container = document.querySelector('div')
//};
//running the function
//submitButton.addEventListener('click', addToDo)
//prevent the form submit so i do not get an error
//document.querySelector("form").addEventListener('submit', e => e.preventDefault());



//document.addEventListener("DOMContentLoaded", () => {
   //your code here

//});
//document.getElementById("Create New Task").addEventListener('click', taskFn)
//function taskFn(){
 // console.log("heyyyyyyyy")
//}

//class TaskList{
  //constructor(){
  //  this.tasks = [];
 // }
  //createNewTask(description){
   // const newTask = new Task(description);
   // this.tasks.push(newTask);
  //}
  //renderTasks(){
  //  return this.tasks.map((task)=>task.render()).join("");
 // }
 // deleteTask(description){
  //  this.tasks = this.tasks.filter((task) => task.description !== description);

  //}
//}


//document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //initialize tasklist
  // const tasklist = new TaskList();
   //const newTaskForm = document.getElementById("create-task-form")
  // const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");

  // const taskUl = document.getElementById("tasks");
  // const renderApp = () => (taskUl.innerHTML = tasklist.renderTasks());

  // newTaskForm.addEventListener("submit", (e) => {
  //  e.preventDefault();
  //  tasklist.createNewTask(newTaskDescription.value);
    //reset form
  //  e.target.reset();
  //  renderApp();
   //});
  // taskUl.addEventListener("click",(e) => {
  //  if(e.target.nodeName === "BUTTON"){
   //   TaskList.deleteTask(e.target.dataset.description);
   //   renderApp();
   // }
  // });


  //});
//function holdsTodo(todo){
//  let p = document.getElementById('p')
 // p.textContent = todo
 // document.querySelector('#list').appendChild(p)
//}
