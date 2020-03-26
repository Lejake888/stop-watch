let beginClock = null;
let stopClock = null;
let stopped = 0;
let interval;
let minutes;
let seconds;
let milliseconds;
let targetNumber;
let sum = 0;
let round = 0;
let best = 0;
let score = 0;
let totalScore = 0;

class StopWatch  {
    constructor() {
        this.timing = false;
    }
}

bestScore = () => {
    if (best == 0 || best > sum) {
        best = sum
    }
    document.getElementById("best").innerHTML = best.toFixed(3)
    calculateScore()
}

getDifference = () => {
    if (total > convertedTarget) {
        sum = total - convertedTarget
    }
    else if (convertedTarget > total) {
        sum = convertedTarget - total
    }
    document.getElementById("difference").innerHTML = sum.toFixed(3)
    bestScore()
}

calculateScore = () => {
    totalScore = totalScore + 100
    document.getElementById("biggestScore").innerHTML = totalScore
}

calculateTimeDifference = () => {
    targetTime = `00:${targetNumber}:000`
    stoppedTime = `${minutes}:${seconds}:${milliseconds}`
    document.getElementById("targetTime").innerHTML = targetTime
    document.getElementById("stoppedTime").innerHTML = stoppedTime
    minutesInSeconds = minutes * 60
    total = parseFloat(parseInt(minutesInSeconds) + parseInt(seconds) + (milliseconds/1000))
    convertedTarget = parseInt(targetNumber)
    getDifference()
}

setTarget = () => {
    targetNumber = Math.ceil(Math.random() * 10) + 5
    targetNumber = targetNumber < 10 ? "0" + targetNumber : targetNumber;
    target.innerHTML = targetNumber
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
    if (round < 10) {
        setTarget()
        round++
        document.getElementById("roundCount").innerHTML = round
        console.log("Start");
        timer.timing = true;
        if (beginClock === null) {
            beginClock = new Date();
        }

        if (stopClock !== null) {
            stopped += (new Date() - stopClock);
        }
        started = setInterval(clock, 1);	
    }
    else {
        alert("Game Over")
    }
}

stopTimer = () => {
    console.log("Stop");
    timer.timing = false;
    startButton.disabled = true
    resetButton.disabled = false
    stopClock = new Date();
    clearInterval(started);
    clockMinutes.innerHTML = minutes
    clockSeconds.innerHTML = seconds
    clockMilliseconds.innerHTML = milliseconds
    calculateTimeDifference()
}

resetTimer = () => {
    console.log("Reset");
    beginClock = null;
    stopClock = null;
    stopped = 0;
    interval;
    timer.timing = false;
    startButton.disabled = false
    resetButton.disabled = true
    clockMinutes.innerHTML = "00"
    clockSeconds.innerHTML = "00"
    clockMilliseconds.innerHTML = "000"
    document.getElementById("time").style.color = "black"
}

clock = () => {
    let currentTime = new Date()
    let timeTaken = new Date(currentTime - beginClock - stopped)
    minutes = timeTaken.getUTCMinutes()
    seconds = timeTaken.getUTCSeconds()
    milliseconds = timeTaken.getUTCMilliseconds()
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 100 ? "0" + milliseconds : milliseconds < 10 ? "00" + milliseconds : milliseconds;
    console.log(minutes)
    console.log(seconds)
    console.log(milliseconds)
    if (seconds >= parseInt(targetNumber) + 15) {
        document.getElementById("time").style.color = "red"
    }
}

let timer = new StopWatch()
let startButton = document.getElementById("start") 
let resetButton = document.getElementById("reset") 
let target = document.getElementById("random") 
startButton.disabled = false
resetButton.disabled = true

let clockMinutes = document.getElementById("minutes")
let clockSeconds = document.getElementById("seconds")
let clockMilliseconds = document.getElementById("ms")

startButton.addEventListener("click", () => {
    clockMinutes.innerHTML = "??"
    clockSeconds.innerHTML = "??"
    clockMilliseconds.innerHTML = "???"
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