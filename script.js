let gameseq =[];
let userseq =[];

let btns=["yellow","red","blue","green"];

let started =false;
let level =0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}

function levelup () {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randBtn =document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
   
}
function checkAns(idx){
    

    if (userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
          setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML =`Game is Over! your score was <b>${level}</b><br> Press any key to start.`;
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn= this;
    userFlash(btn);

    userColor =btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns =document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}