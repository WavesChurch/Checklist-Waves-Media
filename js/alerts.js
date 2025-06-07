const alertInputs = document.querySelectorAll('.alertAt');
const body = document.getElementById('checklist');
const stopButton = document.getElementById('btnStopAlert');

const triggeredAlerts = new Set(); // to prevent re-triggering
let currentAlertIdPlaying = null;

// Check every second for matching times
setInterval(() => {
  const now = new Date();
  const currentHHMM = now.toTimeString().slice(0, 5); // "HH:MM"

  alertInputs.forEach(input => {
    const container = input.closest('.alert-container');
    const alertId = container.getAttribute('data-alert-id');
    const targetTime = input.value;

    if (targetTime && targetTime === currentHHMM && !triggeredAlerts.has(alertId)) {
      body.classList.add('alert-hour');
      currentAlertIdPlaying = alertId;
      triggeredAlerts.add(alertId);
    }
  });
}, 1000);

stopButton.addEventListener('click', () => {
  if (currentAlertIdPlaying !== null) {
    body.classList.remove('alert-hour');
    currentAlertIdPlaying = null;
  }
});