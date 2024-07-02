const updateDateTime = () => {
  // Get current date and time
  const now = new Date();

  // Get current time in UTC
  const utcTime = now.toUTCString().replace('GMT', 'UTC');

  // Array to hold values for days of the week
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

  // Update the content of the elements to hold date and time
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    utcTime;
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
};

// call the updateDateTime function every minute to get real time values
setInterval(updateDateTime, 1000);
