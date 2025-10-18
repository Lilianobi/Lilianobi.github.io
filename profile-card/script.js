function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  timeElement.textContent = formattedTime;
}


updateTime();
setInterval(updateTime, 1000);
