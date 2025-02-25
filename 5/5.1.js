function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const task = taskInput.value;

    if (task) {
      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = function() { this.remove(); };
      taskList.appendChild(li);
      taskInput.value = "";
      saveTasks();
    }
  }

  function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("#taskList li")).map(li => li.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = function() { this.remove(); saveTasks(); };
      document.getElementById("taskList").appendChild(li);
    });
  }

  window.onload = loadTasks;