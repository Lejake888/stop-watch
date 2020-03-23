let time = 0;
let beginClock = null;
let stopClock = null;
let stopped = 0;
let interval;

class StopWatch  {
    constructor() {
        this.timing = false;
    }
}

setTarget = () => {
    target.innerHTML = Math.ceil(Math.random() * 10) + 5
}

buttonToggle = () => {
    if (timer.timing) {
        startButton.innerHTML = "Stop"
        startButton.style.backgroundColor = "red"
    }
    else {
        startButton.innerHTML = "Start"
        startButton.style.backgroundColor = "lime"
    }
}

startTimer = () => {
    setTarget()
    console.log("Start");
    timer.timing = true;
    if (beginClock === null) {
        beginClock = new Date();
    }

    if (stopClock !== null) {
        stopped += (new Date() - stopClock);
    }
    console.log(stopped);

    started = setInterval(clock, 10);	
}

stopTimer = () => {
    console.log("Stop");
    timer.timing = false;
    startButton.disabled = true
    resetButton.disabled = false
    stopClock = new Date();
    clearInterval(started);
}

resetTimer = () => {
    console.log("Reset");
    time = 0;
    beginClock = null;
    stopClock = null;
    stopped = 0;
    interval;
    timer.timing = false;
    startButton.disabled = false
    resetButton.disabled = true
}

clock = () => {
    let currentTime = new Date()
    let timeTaken = new Date(currentTime - beginClock - stopped)
    minutes = timeTaken.getUTCMinutes()
    seconds = timeTaken.getUTCSeconds()
    milliseconds = timeTaken.getUTCMilliseconds()
    console.log(minutes)
    console.log(seconds)
    console.log(milliseconds)
}

let timer = new StopWatch()
let startButton = document.getElementById("start") 
let resetButton = document.getElementById("reset") 
let target = document.getElementById("random") 
startButton.disabled = false
resetButton.disabled = true

startButton.addEventListener("click", () => {
    if (!timer.timing) {
        startTimer()
    }
    else if (timer.timing) {
        stopTimer()
    }
    buttonToggle()
});

resetButton.addEventListener("click", () => {
    resetTimer()
    buttonToggle()
});