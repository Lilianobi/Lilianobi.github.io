function updateTime() {
  const timeElements = document.querySelectorAll('[data-testid="test-user-time"]');
  const now = Date.now();
  timeElements.forEach(el => {
    el.textContent = now;
  });
}

updateTime();
setInterval(updateTime, 1000);