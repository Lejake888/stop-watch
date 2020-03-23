let time = 0;
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
    console.log("Start");
    timer.timing = true;
}

stopTimer = () => {
    console.log("Stop");
    timer.timing = false;
}

resetTimer = () => {
    console.log("Reset");
    time = 0;
    timer.timing = false;
}

let timer = new StopWatch()
let startButton = document.getElementById("start") 
let resetButton = document.getElementById("reset") 
let target = document.getElementById("random") 

setTarget()

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