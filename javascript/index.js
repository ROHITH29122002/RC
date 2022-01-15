const nbright = document.querySelector(".nb-right");
const nbopen = document.querySelector(".nb-open");
const nbclose = document.querySelector(".nb-close");


if(localStorage.getItem('name')){
    document.querySelector('#nameform-container').style.display="none";
    document.querySelector('#nb-logout').style.display="block";
}
else{
    document.querySelector('#nb-logout').style.display="none";
    document.querySelector('.name-container').style.display="none";
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