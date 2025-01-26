const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add a new task
addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    addTask(task);
    todoInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

// Add task to the list
function addTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button onclick="removeTask(this)">Delete</button>
  `;
  todoList.appendChild(li);
}

// Remove task from the list
function removeTask(button) {
  const li = button.parentElement;
  todoList.removeChild(li);
}
