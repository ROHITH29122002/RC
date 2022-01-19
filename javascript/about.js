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