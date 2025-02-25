let currentLottery = "";

function generateLottery() {
  let lotteryNumber = "";
  for (let i = 0; i < 6; i++) {
    const input = document.getElementById(`digit${i}`);
    if (input.value && !isNaN(input.value)) {
      lotteryNumber += input.value;
      input.classList.add("locked");
    } else {
      const randomDigit = Math.floor(Math.random() * 10);
      lotteryNumber += randomDigit;
      input.value = randomDigit;
      input.classList.remove("locked");
    }
  }
  currentLottery = lotteryNumber;
  document.getElementById(
    "generatedNumber"
  ).textContent = `Generated Number: ${lotteryNumber}`;
}

function checkGuess() {
  const userGuess = document.getElementById("userGuess").value;
  const resultMessage = document.getElementById("resultMessage");

  if (userGuess.length !== 6 || isNaN(userGuess)) {
    resultMessage.textContent = "Please enter a valid 6-digit number.";
    resultMessage.style.color = "red";
    return;
  }

  if (userGuess === currentLottery) {
    resultMessage.textContent = "🎉 Congratulations! You guessed correctly!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = `❌ Sorry! The correct number was ${currentLottery}`;
    resultMessage.style.color = "red";
  }
}
