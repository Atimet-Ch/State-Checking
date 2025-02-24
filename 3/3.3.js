// ตรวจสอบข้อมูลจากฟอร์ม

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");
  
    if (!email.includes("@") || !email.endsWith(".com")) {
      message.textContent = '';
      message.textContent = "Invalid email address!";
      message.style.color = "red";
    } else {
      message.textContent = '';
      message.textContent = `Welcome, ${name}!`;
      message.style.color = "green";
    }
  });