let playerScore = 0;
let computerScore =0;


function computerPlay (){
    const randomNum = ~~(Math.random()*3);
    if(randomNum === 0) return 'circle';
    if(randomNum === 1) return 'triangle';
    if(randomNum === 2) return 'square';
}

function compareRound(getChoiceId,getComputerChoice){
    if(getChoiceId === getComputerChoice){
        return 'draw'
    }
    if(
        (getChoiceId === 'circle' && getComputerChoice === 'triangle')||
        (getChoiceId === 'triangle' && getComputerChoice === 'square')||
        (getChoiceId === 'square' && getComputerChoice === 'circle')
    ) {
            playerScore++;
            return 'player'
    }
    if(
        (getComputerChoice === 'circle' && getChoiceId === 'triangle')||
        (getComputerChoice === 'triangle' && getChoiceId === 'square')||
        (getComputerChoice === 'square' && getChoiceId === 'circle')
        ) {
            computerScore++;
            return 'comp'
        }
  };

function modalPopup (playerScore, computerScore){
    if(playerScore === 5 || computerScore === 5){
        modalJs.style.display = 'block'
        matchWinner(playerScore,computerScore)
    }
}

function catchEvent (e){
    const getChoiceId= e.target.id;
    const getComputerChoice= computerPlay();
    const roundWinner = compareRound(getChoiceId, getComputerChoice)
    console.log(getChoiceId, getComputerChoice, roundWinner, playerScore, computerScore)
    showComputerChoice(roundWinner, getComputerChoice)
    modalPopup(playerScore, computerScore)
    userScoreSpan.innerText = `${playerScore}`
    compScoreSpan.innerText = `${computerScore}`
}

//testground function
function showComputerChoice(roundWinner, getComputerChoice){
    if(roundWinner === 'player'){
        results.innerText = 'YOU WIN!'
        chompChoose.innerText = `Computer Chose ${getComputerChoice.toUpperCase()}`
        showWin.style.color = '#249F9C' 
        showShape(getComputerChoice)
    }
    if(roundWinner === 'comp'){
        results.innerText = 'YOU LOSE!'
        chompChoose.innerText = `Computer Chose ${getComputerChoice.toUpperCase()}`
        showWin.style.color = '#F44786'
        showShape(getComputerChoice)
    }
    if(roundWinner === 'draw'){
        results.innerText = 'YOU TIED!'
        showWin.style.color = 'white'
        chompChoose.innerText = `Computer Chose ${getComputerChoice.toUpperCase()}`
        showShape(getComputerChoice)
    }
}

function showShape(getComputerChoice){
    if(getComputerChoice === 'circle'){
        Showshapes.innerHTML = `<p><ion-icon name="ellipse-outline"></ion-icon></p>`
    }
    if(getComputerChoice === 'triangle'){
        Showshapes.innerHTML =`<ion-icon name="triangle-outline"></ion-icon>`
    }
    if(getComputerChoice === 'square'){
        Showshapes.innerHTML =`<ion-icon name="square-outline"></ion-icon>`
    }
}

function matchWinner (playerScore, computerScore){
    if(playerScore === 5){
        showMatchWin.innerText = `YOU WON THE MATCH`
        showMatchWin.style.color = '#249F9C'
        
    }
    if(computerScore === 5) {
        showMatchWin.innerText = `YOU LOST THE MATCH`
        showMatchWin.style.color = `#F44786`
    }
}

const playerChoice = document.querySelectorAll('[data-choice]')
const userScoreSpan = document.getElementById('userScore')
const compScoreSpan = document.getElementById('compScore')
const modalJs = document.getElementById('modalContainer')
const retryBtn = document.querySelector('.retry')
const results = document.getElementById('roundWin')
const chompChoose = document.getElementById('compChose')
const Showshapes = document.getElementById('shape')
const showWin = document.getElementById('roundWin')
const showMatchWin = document.getElementById('matchWin')
retryBtn.addEventListener('click', () => {
    window.location.reload();
})
playerChoice.forEach(selected => selected.addEventListener('click', catchEvent))