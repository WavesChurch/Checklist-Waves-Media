let displayTimer = setInterval(() => {
  today.innerHTML = moment().format("LL");
  timer.innerHTML = moment().format("HH:mm:ss");
}, 100);