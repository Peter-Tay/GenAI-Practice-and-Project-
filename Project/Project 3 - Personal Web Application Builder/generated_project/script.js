document.addEventListener("DOMContentLoaded", () => {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");
  const digitalTime = document.getElementById("digital-time");

  if (!hourHand || !minuteHand || !secondHand || !digitalTime) {
    return;
  }

  const pad = (value) => String(value).padStart(2, "0");

  const formatDigitalTime = (date) => {
    const hours = date.getHours();
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${pad(hours)}:${minutes}:${seconds}`;
  };

  const updateClock = () => {
    const now = new Date();

    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6;
    const hourDeg = hours * 30;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    digitalTime.textContent = formatDigitalTime(now);
  };

  updateClock();
  setInterval(updateClock, 1000);
});
