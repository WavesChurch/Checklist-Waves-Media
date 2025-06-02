moment.locale("en-us");
const btnStopAlert = document.getElementById("btnStopAlert");
const alertInputs = [...document.querySelectorAll(".alertAt")];
const alerts = alertInputs.map((input, index) => ({
  id: index,
  timeInput: input,
  removed: false,
}));

let currentActiveAlert = null;
let displayTimer;
let notificationDisplayed = false;

alerts.forEach((alert) => {
  alert.timeInput.addEventListener("change", () => {
    alert.removed = false;
    if (currentActiveAlert?.id === alert.id) {
      checklist.classList.remove("alert-hour");
      currentActiveAlert = null;
    }
  });
});

displayTimer = setInterval(() => {
  hoje.innerHTML = moment().format("LL");
  timer.innerHTML = moment().format("HH:mm:ss");

  const currentTime = moment().format("HH:mm:ss");

  alerts.forEach((alert) => {
    const alertTime = alert.timeInput.value;

    if (
      alertTime &&
      currentTime >= alertTime &&
      !alert.removed &&
      currentActiveAlert === null 
    ) {
      checklist.classList.add("alert-hour");
      if (!notificationDisplayed) {
        mostrarNotificacao();
        notificationDisplayed = true;
      }
      currentActiveAlert = alert;
    }
  });
}, 100);

btnStopAlert.addEventListener("click", () => {
  if (currentActiveAlert) {
    currentActiveAlert.removido = true;
    checklist.classList.remove("alert-hour");
    notificationDisplayed = false;
    currentActiveAlert = null;
  }
});
