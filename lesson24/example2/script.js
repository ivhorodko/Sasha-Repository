let timeLeft = 10;
let timerInterval = null;

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timeLeft = 10;
  const timerSpan = document.getElementById("timer");
  timerSpan.textContent = timeLeft;
  timerSpan.classList.remove("time-up");

  timerInterval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerSpan.classList.add("time-up");
      timerSpan.textContent = "0";
    }
  }, 1000);
}