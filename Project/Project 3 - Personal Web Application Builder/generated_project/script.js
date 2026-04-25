function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
  const currentTime = new Date();
  const clockElement = document.getElementById('clock');

  if (!clockElement) {
    return;
  }

  clockElement.textContent = formatTime(currentTime);
}

updateClock();
setInterval(updateClock, 1000);
