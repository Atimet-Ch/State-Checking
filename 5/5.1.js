// ฟังก์ชันที่เพิ่ม task และบันทึกข้อมูลลง localStorage
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

    // Create Attendance checkbox cell
    const attendanceCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "attendance-checkbox";
    attendanceCell.appendChild(checkbox);

    const actionCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
      row.remove();
      updateLocalStorage(); // อัพเดต localStorage หลังการลบ
    };

    actionCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(detailsCell);
    row.appendChild(attendanceCell);  // Add attendance cell
    row.appendChild(actionCell);

    tableBody.appendChild(row);

    // บันทึกข้อมูลใน localStorage
    saveToLocalStorage();

    // Clear input fields
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDetails").value = "";
  } else {
    alert("Please enter both task Title and Details!");
  }
}

// ฟังก์ชันเพื่อบันทึกข้อมูลตารางใน localStorage
function saveToLocalStorage() {
  const tasks = [];
  const rows = document.querySelectorAll("#taskTable tbody tr");

  rows.forEach(row => {
    const taskTitle = row.cells[0].textContent;
    const taskDetails = row.cells[1].textContent;
    const isChecked = row.cells[2].querySelector("input[type='checkbox']").checked;
    
    tasks.push({ taskTitle, taskDetails, isChecked });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ฟังก์ชันเพื่อโหลดข้อมูลจาก localStorage และเติมตาราง
function loadFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const tableBody = document.querySelector("#taskTable tbody");

  tasks.forEach(task => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = task.taskTitle;

    const detailsCell = document.createElement("td");
    detailsCell.textContent = task.taskDetails;

    const attendanceCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "attendance-checkbox";
    checkbox.checked = task.isChecked; // กำหนดสถานะการติ๊ก
    attendanceCell.appendChild(checkbox);

    const actionCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
      row.remove();
      updateLocalStorage(); // อัพเดต localStorage หลังการลบ
    };

    actionCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(detailsCell);
    row.appendChild(attendanceCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// ฟังก์ชันเพื่ออัพเดต localStorage หลังการลบข้อมูล
function updateLocalStorage() {
  saveToLocalStorage();
}

// เมื่อหน้าจอโหลดให้โหลดข้อมูลจาก localStorage
window.onload = function() {
  loadFromLocalStorage();
};
