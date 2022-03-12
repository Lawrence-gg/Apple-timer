const status = document.querySelector('.timer-status');
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');

const start = document.querySelector('.timer-mode-start');
const pause = document.querySelector('.timer-mode-pause');
const reset = document.querySelector('.timer-mode-reset');
const breakTimer = document.querySelector('.timer-mode-break');

setInterval(timer, 1000);

function timer() {
  let currentMinutes = minutes.innerHTML;
  let currentSeconds = seconds.innerHTML;

  if (currentMinutes != 00) {
    if (currentSeconds == 0) {
      currentMinutes--;
      currentSeconds = 4;
    } else {
      currentSeconds--;
    }
  } else if (currentMinutes == 0 && currentSeconds != 0) {
    currentSeconds--;
  }

  minutes.innerHTML = currentMinutes;
  seconds.innerHTML = currentSeconds;
}
