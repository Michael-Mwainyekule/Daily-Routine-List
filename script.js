function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return; // avoid empty tasks

  const list = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  // Click to remove the task
  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = ""; // clear input field
}
