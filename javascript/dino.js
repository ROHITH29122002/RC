var character=document.getElementById("character");
var block=document.getElementById('block');
document.querySelector('.game-container').onclick = function jump(){
    if( character.classList != "animate"){
        character.classList.add('animate');
        setTimeout(() => {
            character.classList.remove('animate');
        },500);
    }
};


setInterval(() => {
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if( blockleft>50 && blockleft<70 && charactertop>155){
        block.style.animation="none";
        block.style.display="none";
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