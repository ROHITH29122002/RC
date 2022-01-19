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



document.getElementById('suggestion').onkeyup = function(){
    if(document.querySelector('#name-input').value.length>0 && document.querySelector('#suggestion').value.length>0 ){
        document.querySelector('#name-submit').disabled=false;
        document.querySelector('#name-submit').classList.add('name-submit-green');
    }
    else{
        document.querySelector('#name-submit').disabled=true;
        document.querySelector('#name-submit').classList.remove('name-submit-green');
    }
}
document.querySelector('#name-submit').disabled=true;