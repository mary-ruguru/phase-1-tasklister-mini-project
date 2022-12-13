document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskList = new TaskList();
  let newTaskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let newTaskPriority = document.getElementById("new-task-priority");
  let taskUl = document.getElementById("tasks");
  let renderApp = () => (taskUl.innerHTML = taskList.renderTasks());


  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});