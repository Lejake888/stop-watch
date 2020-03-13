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
}

stopTimer = () => {
    console.log("Stop");
    timer.timing = false;
}

resetTimer = () => {
    console.log("Stop");
    time = 0;
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