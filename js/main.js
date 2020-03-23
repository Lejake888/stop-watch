let time = 0;
let interval;

class StopWatch  {
    constructor() {
        this.timing = false;
    }
}

startTimer = () => {
    console.log("Start");
    timer.timing = true;
    startButton.innerHTML = "Stop"
    startButton.style.backgroundColor = "red"
}

stopTimer = () => {
    console.log("Stop");
    timer.timing = false;
    startButton.innerHTML = "Start"
    startButton.style.backgroundColor = "lime"
}

resetTimer = () => {
    console.log("Reset");
    time = 0;
    timer.timing = false;
}

let timer = new StopWatch()
let startButton = document.getElementById("start") 
let resetButton = document.getElementById("reset") 

startButton.addEventListener("click", () => {
    if (!timer.timing) {
        startTimer()
    }
    else if (timer.timing) {
        stopTimer()
    }
});

resetButton.addEventListener("click", () => {
    resetTimer()
});