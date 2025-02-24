// อ่าน JSON จากไฟล์ (ใน browser ใช้ fetch)
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log("JSON Data:", data))
  .catch(error => console.error("Error:", error));

// การแปลง Object เป็น JSON String
let newStudent = { name: "Charlie", age: 22 };
let jsonString = JSON.stringify(newStudent);
console.log("JSON String:", jsonString);

// การแปลง JSON String กลับเป็น Object
let parsedData = JSON.parse(jsonString);
console.log("Parsed Data:", parsedData);

// ฟังก์ชันใหม่สำหรับการอ่าน JSON จากไฟล์และแปลงเป็น Object
function readJsonFromFile(filePath) {
  fetch(filePath)
    .then(response => response.json())
    .then(data => console.log("Read JSON Data:", data))
    .catch(error => console.error("Error reading JSON:", error));
}

// เรียกใช้ฟังก์ชันใหม่
readJsonFromFile('data.json');

