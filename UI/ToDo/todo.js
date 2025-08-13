let tasks = [
//   { id: 1, task: "Buy groceries", done: false },
//   { id: 2, task: "Finish Bootstrap project", done: false },
//   { id: 3, task: "Call the electrician", done: true }
];

const todoList = document.getElementById("todo-list");

function renderTasks() {
  todoList.innerHTML = "";
  tasks.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "list-container row border-bottom py-1 align-items-center";

    row.innerHTML = `
      <div class="select col-1 text-center">
        ${index + 1}
      </div>
      <div class="name col-7 ${item.done ? 'text-decoration-line-through text-muted' : ''}">
        ${item.task}
      </div>
      <div class="action col-4 text-center">
        <button class="btn btn-success btn-sm me-1" onclick="markDone(${item.id})">Done</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${item.id})">Delete</button>
      </div>
    `;
    todoList.appendChild(row);
  });
}

function markDone(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, done: true } : t);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function saveNewTask() {
  const taskInput = document.getElementById("new-task-input");
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task name.");
    return;
  }

  tasks.push({ id: Date.now(), task: taskName, done: false });
  renderTasks();

  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'));
  modal.hide();

  taskInput.value = ""; // Reset input
}

renderTasks();

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const modalEl = document.getElementById("addTaskModal");
    const modalVisible = modalEl.classList.contains("show");
    const taskInput = document.getElementById("new-task-input");

    if (modalVisible && taskInput.value.trim() !== "") {
      e.preventDefault();
      saveNewTask();
    }
  }
});
