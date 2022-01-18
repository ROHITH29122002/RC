//variables and constants.
let inputdirection = {x: 0,y: 0};
let speed = 5;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13,y: 15}
];
const nbright = document.querySelector(".nb-right");
const nbopen = document.querySelector(".nb-open");
const nbclose = document.querySelector(".nb-close");
let food = {x: 6 , y: 7};
const eat = new Audio('music/eat.mp3');
const gameover = new Audio('music/gameover.mp3');
const move = new Audio('music/move.mp3');
var count = 0;
var sname = localStorage.getItem('name');

nbopen.addEventListener('click',show);
nbclose.addEventListener('click',close);

function show(){
    nbright.style.display = 'flex';
    nbright.style.top = '0';
}

function close(){
    nbright.style.top = '-100%';
}


function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function iscollide(snake){
    for (let i = 1; i < snake.length; i++) {
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            return true;
        }
    }
    if( snake[0].x>=19 || snake[0].x < 0 || snake[0].y>=19 || snake[0].y <0){
        return true;
    }
    return false;
}

function gameEngine(){
    if(iscollide(snakeArr)){
        gameover.play();
        window.scrollBy(0,500);
        inputdirection = {x: 0, y: 0};
        alert(`GAME OVER! YOUR SCORE : ${count}`);
        if(localStorage.getItem('snakescore') < count){
            localStorage.setItem('snakename',sname);
            localStorage.setItem('snakescore',count);
            document.querySelector('#highscore').innerHTML = ` HIGHSCORE : ${localStorage.getItem('snakescore')} (${localStorage.getItem('snakename')})`;
        }
        snakeArr = [{x:13 , y:15}];
    }

    if( snakeArr[0].x === food.x && snakeArr[0].y === food.y){
        eat.play();
        counting();
        snakeArr.unshift({ x: snakeArr[0].x + inputdirection.x , y: snakeArr[0].y + inputdirection.y});
        let a= 2;
        let b= 16;
        food = {x: Math.round( a + (b-a)* Math.random()),y: Math.round( a + (b-a)* Math.random())};

    }

    for (let i = snakeArr.length-2; i >= 0; i--) {
        snakeArr[i+1]={...snakeArr[i]};
    }

    snakeArr[0].x += inputdirection.x;
    snakeArr[0].y += inputdirection.y;

    // Display snake
    document.querySelector('#board').innerHTML="";
    snakeArr.forEach( (e,index) => {
        snakeElement =  document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if( index === 0){
            if(inputdirection.x===-1){
                snakeElement.classList.add('head-left');
            }
            else if(inputdirection.x===1){
                snakeElement.classList.add('head-right');
            }
            else if(inputdirection.y===1){
                snakeElement.classList.add('head-down');
            }
            else{
                snakeElement.classList.add('head-up');
            }
        }
        else{
            snakeElement.classList.add('snake');
        }
        document.querySelector('#board').appendChild(snakeElement);
    });

    //Display food
    foodElement =  document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    document.querySelector('#board').appendChild(foodElement);
}


window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            move.play();
            inputdirection.x = 0;
            inputdirection.y = -1;
           
            break;
        case "ArrowDown":
            move.play();
            inputdirection.x = 0;
            inputdirection.y = 1;
            break;
        case "ArrowLeft":
            move.play();
            inputdirection.x = -1;
            inputdirection.y = 0;
            break;
        case "ArrowRight":
            move.play();
            inputdirection.x = 1;
            inputdirection.y = 0;
            break;
        default:
            break;
    }
});

document.querySelector('#up').addEventListener('click', () => {
    move.play();
    inputdirection.x=0;
    inputdirection.y =-1;
});

document.querySelector('#down').addEventListener('click', () => {
    move.play();
    inputdirection.x=0;
    inputdirection.y =1;
});

document.querySelector('#left').addEventListener('click', () => {
    move.play();
    inputdirection.x=-1;
    inputdirection.y =-0;
});
document.querySelector('#right').addEventListener('click', () => {
    move.play();
    inputdirection.x=1;
    inputdirection.y =0;
});



function counting(){
    count = count + 50;
}

document.querySelector('#restart-button').onclick = function (){
    location.reload();
    window.scrollBy(0,-500);
}
document.querySelector('#highscore').innerHTML = ` HIGHSCORE : ${localStorage.getItem('snakescore')} (${localStorage.getItem('snakename')})`;