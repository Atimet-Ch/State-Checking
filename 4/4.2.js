function checkAge() {
  const ageInput = document.getElementById("age").value;
  const age = parseInt(ageInput);
  const message = document.getElementById("formMessage");

  // ตรวจสอบว่าเป็นตัวเลขที่ถูกต้องหรือไม่
  if (isNaN(age) || age <= 0) {
    message.textContent = "";
    message.textContent = `Please enter a valid positive age.`;
    message.style.color = "red";
    return;
  }

  // แสดงผลลัพธ์ตามช่วงอายุ
  if (age < 21) {
    message.textContent = "";
    message.textContent = `You are a child.`;
    message.style.color = "green";
  } else if (age >= 21 && age < 45) {
    message.textContent = "";
    message.textContent = `You are a teenager.`;
    message.style.color = "green";
  } else if (age >= 45 && age < 60) {
    message.textContent = "";
    message.textContent = `You are an adult.`;
    message.style.color = "green";
  } else if (age >= 61 && age < 70) {
    message.textContent = "";
    message.textContent = `You are a Middle-aged.`;
    message.style.color = "green";
  } else if (age >= 71 && age < 80) {
    message.textContent = "";
    message.textContent = `You are a senior citizen.`;
    message.style.color = "green";
  } else {
    message.textContent = "";
    message.textContent = `You are an old person.`;
    message.style.color = "green";
  }
}
