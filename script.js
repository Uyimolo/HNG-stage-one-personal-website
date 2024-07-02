function updateDateTime() {
  // Get current date and time
  const now = new Date();

  // Get current time in UTC
  const utcTime = now.toUTCString().replace('GMT', 'UTC');

  // Get current day of the week
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDay = daysOfWeek[now.getUTCDay()];

  // Update the elements
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    utcTime;
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Update date and time immediately
// updateDateTime();

// Optionally, update every minute
setInterval(updateDateTime, 1000);
