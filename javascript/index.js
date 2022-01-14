const nbright = document.querySelector(".nb-right");
const nbopen = document.querySelector(".nb-open");
const nbclose = document.querySelector(".nb-close");



if(localStorage.getItem('name')){
    console.log('name');
}
else{
    document.querySelector('#nb-logout').style.display="none";
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