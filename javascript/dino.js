var character=document.getElementById("character");
var block=document.getElementById('block');
const gameover = new Audio('music/gameover.mp3');
const move = new Audio('music/move.mp3');
document.querySelector('.game-container').onclick = function jump(){
    if( character.classList != "animate"){
        move.play();
        character.classList.add('animate');
        setTimeout(() => {
            character.classList.remove('animate');
        },500);
    }
};
const nbright = document.querySelector(".nb-right");
const nbopen = document.querySelector(".nb-open");
const nbclose = document.querySelector(".nb-close");

nbopen.addEventListener('click',show);
nbclose.addEventListener('click',close);

function show(){
    nbright.style.display = 'flex';
    nbright.style.top = '0';
}

function close(){
    nbright.style.top = '-100%';
}


setInterval(() => {
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if( blockleft>50 && blockleft<70 && charactertop>155){
        block.style.animation="none";
        block.style.display="none";
        gameover.play();
        clearInterval(counting);
        if(localStorage.getItem('dinohighscore')<(counter*50)){
            localStorage.setItem('dinohighscore',counter*50);
            localStorage.setItem('dinoname',dname);
        }
        alert(`GAME OVER!`);
        document.querySelector('#highscore').innerHTML=`HIGHSCORE : ${localStorage.getItem('dinohighscore')} (${localStorage.getItem('dinoname')})`;
    }
}, 10);

document.querySelector('#restart-button').onclick=function (){
    location.reload();
};

let counter=0;
let dname = localStorage.getItem('name');
document.querySelector('#highscore').innerHTML=`HIGHSCORE : ${localStorage.getItem('dinohighscore')} (${localStorage.getItem('dinoname')})`;
const counting = setInterval(() => {
    counter++;
    document.querySelector('#score').innerHTML=` YOUR SCORE : ${counter*50}`;
}, 1000);

if (!localStorage.getItem('highscore')){
    localStorage.setItem('highscore',"0");
}