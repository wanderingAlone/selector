const roles = ['Innocent', 'Sheriff', 'Murderer'];
const roleDisplay = document.getElementById('roleText');
const startButton = document.getElementById('startBtn');

let scrollInterval;
let slowDownTimeout;

function startSelection() {
  let currentRoleIndex = 0;
  let speed = 50; // Starting speed for fast scrolling

  roleDisplay.textContent = roles[currentRoleIndex];

  // Clear previous intervals and timeouts
  clearInterval(scrollInterval);
  clearTimeout(slowDownTimeout);

  // Start fast scrolling
  scrollInterval = setInterval(() => {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    roleDisplay.textContent = roles[currentRoleIndex];
  }, speed);

  // Gradually slow down and stop at a random role
  slowDownTimeout = setTimeout(() => {
    slowDown(scrollInterval, currentRoleIndex);
  }, 1500); // Fast scrolling for 1.5 seconds
}

function slowDown(interval, currentRoleIndex) {
  clearInterval(interval);

  let slowSpeed = 200;
  const deceleration = 0.9; // Factor to reduce speed

  const slowInterval = setInterval(() => {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    roleDisplay.textContent = roles[currentRoleIndex];
    slowSpeed *= deceleration;

    if (slowSpeed < 20) {
      clearInterval(slowInterval);
    }
  }, slowSpeed);
}

startButton.addEventListener('click', startSelection);
