const colors = require('colors')
const prompt = require('prompt-sync')();

function getComputerChoice(){
    let options = ['rock','paper','scissors' ]

    const randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice]
}

function getHumanChoice(){
    const choice = prompt('Choose either rock, paper, scissors ' );
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    humanSelection = humanSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    console.log(`You chose ${humanSelection}`)
    console.log(`Computer chose ${computerSelection}`)

    if(humanSelection === computerSelection){
        console.log(`It's a tie`)
        return;
    }

    if((humanSelection === 'ROCK' && computerSelection === 'SCISSORS')||
       (humanSelection === 'PAPER' && computerSelection === 'ROCK')||
       (humanSelection === 'SCISSORS' && computerSelection === 'PAPER')
){
    humanScore += 1;
    console.log(``)
    console.log(`You win!  ${humanSelection.cyan} beats ${computerSelection.cyan}`)
}else {
    computerScore += 1;
    console.log(``)
    console.log(`You lose! ${computerSelection.cyan} beats ${humanSelection.cyan}`)
}

console.log(``)
console.log(`Scores: You: ${humanScore} | Computer: ${computerScore}`)
}


function game(){
    for(let i =1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice)
    }

    console.log(``)
    if(humanScore > computerScore){
        console.log(`Congratulations! You are the overall winer`.green)
    }else if(computerScore > humanScore){
        console.log(`You lose! The computer wins the game.`.red)
    }else{
        console.log(`It's a tie! There is no overall winner.`)
        console.log(`Good luck next time.`)
    }
}

// Start the game

game()