const randomColor = function(){
    const hex= '0123456789ABCDEF';
    let color= '#';
    for(let i=0;i<6;i++){
        color +=hex [Math.floor(Math.random() * 16)]; 
    }
    return color;
};

const start= document.querySelector('#start')
const roko = document.getElementById('stop');

let intervalID;

const startChangeColor = function(){
    if(!intervalID){
        intervalID= setInterval(changeBg,200);
    }
    function changeBg(){
        document.body.style.backgroundColor= randomColor();
    }
};

const stopChangeColor = function(){
    clearInterval(intervalID);
    intervalID= null;
};

start.addEventListener('click', startChangeColor);
roko.addEventListener('click',stopChangeColor);
