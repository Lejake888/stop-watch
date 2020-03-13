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
    console.log("Finished");
    timer.timing = false;
}

let timer = new StopWatch()
let startButton = document.getElementById("start") 

startButton.addEventListener("click", () => {
    if (!timer.timing) {
        startTimer()
    }
    else if (timer.timing) {
        stopTimer()
    }
});