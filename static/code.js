//QUERY selector
//query selector
const dieIcon1 = document.querySelector(".d1");
const dieIcon2 = document.querySelector(".d2");
const dieRoll = document.querySelector(".die-roll");
const result = document.querySelector(".result");

const dieDict = {
    1 : "/static/dice1.svg",
    2 : "/static/dice2.svg",
    3 : "/static/dice3.svg",
    4 : "/static/dice4.svg",
    5 : "/static/dice5.svg",
    6 : "/static/dice6.svg"
}

//audio func
function playAudio(loc) {
    new Audio(loc).play();
}

//countdown
function countdown(seconds, dis) {
    loop = setInterval(function () {

        dis.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(loop);
            dis.textContent = "Time Is Up!";
            playAudio("/static/beep.wav");
            alert("You have reached the end of your task.")     
        }
    }, 1000);
}

//roll on click
dieRoll.addEventListener("click", (e) => {
    var num1;
    var num2;
    playAudio("/static/dicesound.wav");
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
        result.innerHTML = `You rolled:  ${num1 + num2}`;
    }, 3000);
    dieRoll.style.display = "none";
})