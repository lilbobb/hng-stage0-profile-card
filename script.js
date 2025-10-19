function updateTime() {
  const now = new Date();

  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = Date.now();

  const readableTimeElement = document.getElementById("readableTime");
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  readableTimeElement.textContent = `(${displayHours}:${minutes}:${seconds} ${ampm})`;
}

updateTime();

setInterval(updateTime, 1000);
