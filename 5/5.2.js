function addRow(subject = "", credits = 3, score = 0) {
  let table = document.getElementById("gradeTable");
  let row = table.insertRow();
  row.insertCell(
    0
  ).innerHTML = `<input type="text" placeholder="ชื่อวิชา" value="${subject}" oninput="saveData()">`;
  row.insertCell(
    1
  ).innerHTML = `<input type="number" min="1" max="4" value="${credits}" oninput="saveData()">`;
  row.insertCell(
    2
  ).innerHTML = `<input type="number" min="0" max="100" value="${score}" oninput="updateGrade(this); saveData()">`;
  row.insertCell(3).innerText = "-";
  row.insertCell(4).innerText = "-";
  updateGrade(row.cells[2].children[0]);
}

function updateGrade(input) {
  let score = parseInt(input.value);
  let row = input.parentElement.parentElement;
  let gradeCell = row.cells[3];
  let gpaCell = row.cells[4];

  let gradeScale = [
    { min: 80, grade: "A", gpa: 4 },
    { min: 75, grade: "B+", gpa: 3.5 },
    { min: 70, grade: "B", gpa: 3 },
    { min: 65, grade: "C+", gpa: 2.5 },
    { min: 60, grade: "C", gpa: 2 },
    { min: 55, grade: "D+", gpa: 1.5 },
    { min: 50, grade: "D", gpa: 1 },
    { min: 0, grade: "F", gpa: 0 },
  ];

  for (let scale of gradeScale) {
    if (score >= scale.min) {
      gradeCell.innerText = scale.grade;
      gpaCell.innerText = scale.gpa;
      break;
    }
  }
  saveData();
}

function calculateGPA() {
  let table = document.getElementById("gradeTable");
  let rows = table.rows;
  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 1; i < rows.length; i++) {
    let credits = parseInt(rows[i].cells[1].children[0].value);
    let gpa = parseFloat(rows[i].cells[4].innerText);

    if (!isNaN(credits) && !isNaN(gpa)) {
      totalCredits += credits;
      totalGradePoints += credits * gpa;
    }
  }

  let gpa =
    totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : "0.00";
  document.getElementById("result").innerText = "GPA: " + gpa;
  saveData();
}

function saveData() {
  let table = document.getElementById("gradeTable");
  let rows = table.rows;
  let data = [];

  for (let i = 1; i < rows.length; i++) {
    let subject = rows[i].cells[0].children[0].value;
    let credits = rows[i].cells[1].children[0].value;
    let score = rows[i].cells[2].children[0].value;
    data.push({ subject, credits, score });
  }

  localStorage.setItem("grades", JSON.stringify(data));
}

function loadData() {
  let data = localStorage.getItem("grades");
  if (data) {
    let grades = JSON.parse(data);
    grades.forEach((row) => addRow(row.subject, row.credits, row.score));
    calculateGPA();
  }
}
