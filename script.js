let counting = false;

const status = document.querySelector('.timer-status');
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');

const startBtn = document.querySelector('.timer-mode-start');
const pauseBtn = document.querySelector('.timer-mode-pause');
const resetBtn = document.querySelector('.timer-mode-reset');
const breakTimeBtn = document.querySelector('.timer-mode-break');

startBtn.addEventListener('click', () => {
  if (!counting) {
    startTimer();
    counting = true;
  } else {
    return;
  }
});

//Starting the timer;
function startTimer() {
  setInterval(timer, 1000);
}

//Co
function timer() {
  let currentMinutes = minutes.innerHTML;
  let currentSeconds = seconds.innerHTML;

  if (currentMinutes != 00) {
    if (currentSeconds == 0) {
      currentMinutes--;
      currentSeconds = 59;
    } else {
      currentSeconds--;
    }
  } else if (currentMinutes == 0 && currentSeconds != 0) {
    currentSeconds--;
  }
  updateTime(currentMinutes, currentSeconds);
}

function updateTime(min, sec) {
  minutes.innerHTML = min;
  if (currentSeconds < 10) {
    seconds.innerHTML = `0${sec}`;
    document.title = `${min}:0${sec}`;
  } else {
    seconds.innerHTML = sec;
    document.title = `${min}:${sec}`;
  }
}
