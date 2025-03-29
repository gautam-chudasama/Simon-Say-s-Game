let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "blue"];

let start = false;
let level = 0;
let hlevel = 0;

let h2 = document.querySelector('h2');
document.addEventListener("keypress", function() {
    if (start == false){
    console.log("Game is started...");
    start = true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");

    setTimeout(function(){
    btn.classList.remove("gameflash");
    }, 200);
};

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
    btn.classList.remove("userflash");
    }, 200);
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

    if (hlevel < level){
        hlevel = level;
    }
        let h12 = document.querySelector('.h12');
        h12.innerHTML = `Your high score is ${hlevel}`;
};

function checkAns(idx) {
    // console.log("curr level = ", level);
    // let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 800);
        }
    // console.log("same");
    }
    else {
    h2.innerHTML = `Game Over! Your score was <b>${level-1}</b> </br> Press any key to start again.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
    }
};

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}