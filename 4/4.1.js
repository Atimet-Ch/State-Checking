function calculateArea() {
  const radiusInput = document.getElementById("CircleArea").value;
  const radius = parseFloat(radiusInput);
  const message = document.getElementById("formMessage");

  if (isNaN(radius) || radius <= 0) {
    message.textContent = "";
    message.textContent = `Please enter a valid positive radius.`;
    message.style.color = "red";
    return;
  }

  const area = Math.PI * Math.pow(radius, 2);
  message.textContent = "";
  message.textContent = `The area of the circle is: ${area.toFixed(2)}`;
  message.style.color = "green";
}
