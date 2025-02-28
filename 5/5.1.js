
function addTask() {
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDetails = document.getElementById("taskDetails").value;
  const tableBody = document.querySelector("#taskTable tbody");

  if (taskTitle && taskDetails) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = taskTitle;

    const detailsCell = document.createElement("td");
    detailsCell.textContent = taskDetails;

    const actionCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
      row.remove();
    };

    actionCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(detailsCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);

    // Clear input fields
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDetails").value = "";
  } else {
    alert("Please enter both task Student ID and Name - Surname!");
  }
}