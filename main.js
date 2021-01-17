//QUERY selector
//query selector
const dieIcon1 = document.querySelector(".d1");
const dieIcon2 = document.querySelector(".d2");
const dieRoll = document.querySelector(".die-roll");
const result = document.querySelector(".result");
const timer = document.querySelector(".timer")

const dieDict = {
    1 : "assets/dice1.svg",
    2 : "assets/dice2.svg",
    3 : "assets/dice3.svg",
    4 : "assets/dice4.svg",
    5 : "assets/dice5.svg",
    6 : "assets/dice6.svg"
}

//audio func
function playAudio(loc) {
    new Audio(loc).play();
}

//countdown
function countdown(seconds, dis) {
    setInterval(function () {

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//roll on click
dieRoll.addEventListener("click", (e) => {
    var num1;
    var num2;
    playAudio("assets/dicesound.wav");
    for (let i = 0; i < 30; i++){
        setTimeout(function() {
            num1 = Math.floor(Math.random() * 6) + 1;
            dieIcon1.src = dieDict[num1];
            
        }, i * 100);
    }
    for (let i = 0; i < 30; i++){
        setTimeout(function() {
            num2 = Math.floor(Math.random() * 6) + 1;
            dieIcon2.src = dieDict[num2];
            
        }, i * 100);
    }

    setTimeout(function() {
        total = num1 + num2;
        result.innerHTML = `You rolled:  ${total}`;
        startTimer(total * 600, timer);
    }, 3000);
    dieRoll.style.display = "none";
})

//timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var loop = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display.textContent = "TIME IS UP!"
            clearInterval(loop);
        }
    }, 1000);
}