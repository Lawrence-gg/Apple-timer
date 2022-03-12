let counting = undefined;

const status = document.querySelector('.timer-status');
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');

const startBtn = document.querySelector('.timer-mode-start');
const pauseBtn = document.querySelector('.timer-mode-pause');
const resetBtn = document.querySelector('.timer-mode-reset');
const breakTimeBtn = document.querySelector('.timer-mode-break');

//Starting the timer;
startBtn.addEventListener('click', () => {
  if (counting == undefined) counting = setInterval(timer, 1000);
});

pauseBtn.addEventListener('click', () => {
  counting = clearInterval(counting);
});

resetBtn.addEventListener('click', () => {
  counting = clearInterval(counting);
  resetTimer();
});

breakTimeBtn.addEventListener('click', () => {
  counting = clearInterval(counting);
  minutes.innerHTML = '5';
  seconds.innerHTML = '00';
});

function resetTimer() {
  minutes.innerHTML = '25';
  seconds.innerHTML = '00';
}

//Timer clock function
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
  } else {
    return;
  }
  updateTime(currentMinutes, currentSeconds);
}

function updateTime(currentMinutes, currentSeconds) {
  minutes.innerHTML = currentMinutes;
  if (currentSeconds < 10) {
    seconds.innerHTML = `0${currentSeconds}`;
    document.title = `${currentMinutes}:0${currentSeconds}`;
  } else {
    seconds.innerHTML = currentSeconds;
    document.title = `${currentMinutes}:${currentSeconds}`;
  }
}
