const nbright = document.querySelector(".nb-right");
const nbopen = document.querySelector(".nb-open");
const nbclose = document.querySelector(".nb-close");


if(localStorage.getItem('name')){
    document.querySelector('#nameform-container').style.display="none";
    nameplacer();
}
else{
    document.querySelector('#nb-logout').style.display="none";
    document.querySelector('.name-container').style.display="none";
    document.querySelector('#name-submit').disabled="true";
    document.getElementById('name-input').onkeyup = function(){
        if(document.querySelector('#name-input').value.length>0){
            document.querySelector('#name-submit').disabled=false;
            document.querySelector('#name-submit').classList.add('name-submit-green');
        }
        else{
            document.querySelector('#name-submit').disabled=true;
            document.querySelector('#name-submit').classList.remove('name-submit-green');
        }
    }
    document.querySelector('#name-form').onsubmit = function (){
        var name = document.querySelector('#name-input').value;
        localStorage.setItem('name', name);
        location.reload();
    }
}
nbopen.addEventListener('click',show);
nbclose.addEventListener('click',close);

function show(){
    nbright.style.display = 'flex';
    nbright.style.top = '0';
}

function close(){
    nbright.style.top = '-100%';
}

document.querySelector('#nb-logout').onclick = function (){
    localStorage.removeItem('name');
    location.reload();
}

function nameplacer(){
    document.querySelector('.hero-heading').innerHTML=`WELCOME  ${localStorage.getItem('name')}`;
}