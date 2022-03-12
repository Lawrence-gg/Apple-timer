let counting = undefined;
let minuteSetting = 25;

const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');

const startBtn = document.querySelector('.timer-mode-start');
const pauseBtn = document.querySelector('.timer-mode-pause');
const resetBtn = document.querySelector('.timer-mode-reset');
const switchModeBtn = document.querySelector('.timer-mode-break');
const quote = document.querySelector('.quote');

//Starting the timer;
startBtn.addEventListener('click', () => {
  if (counting == undefined) counting = setInterval(timer, 1000);
  quote.classList.remove('hide');
});
//Pause
pauseBtn.addEventListener('click', () => {
  counting = clearInterval(counting);
});

//Reset
resetBtn.addEventListener('click', () => {
  counting = clearInterval(counting);
  resetTimer();
});

//Work mode: Default 25 Minutes, Break mode: 5 Minutes;
switchModeBtn.addEventListener('click', () => {
  counting = clearInterval(counting);
  if (switchModeBtn.innerHTML == 'Break') {
    minuteSetting = 5;
    switchModeBtn.innerHTML = 'Work';
  } else {
    minuteSetting = 25;
    switchModeBtn.innerHTML = 'Break';
  }
  resetTimer();
});

//reset
function resetTimer() {
  minutes.innerHTML = minuteSetting;
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
    document.title = `Time: ${currentMinutes}:${currentSeconds}`;
  }
}
