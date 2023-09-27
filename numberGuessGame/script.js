let randomNumber= parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPrev');

const p =  document.createElement('p');

let prevGuess= [];
let numGuess= 1;

let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber} `);
            endgame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endgame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too Low`);
    }
    else if(guess >randomNumber){
        displayMessage(`Number is Too High`);
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaning.innerHTML= `${11 - numGuess}`
}

function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML= `<h2 id ="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber=  parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        numGuess = 1;
        guessSlot.innerHTML= '';
        remaning.innerHTML= `${11- numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    })
}

