let computerPlay = () => {
    let randomNum = Math.floor(Math.random()*3)
    if (randomNum === 0) {
        return "rock";
    }
        
        else if (randomNum === 1) {
            return "paper"
        }
        else {
            return "scissors"
        }
    
}

let playRound = (humanChoice,computerChoice) => {
    humanChoice = humanChoice.toLowerCase()
if (humanChoice === computerChoice) {
    return "The game is a tie!";
}
if (humanChoice === "rock") {
    if (computerChoice === "paper") {
        return "The computer won this round with paper!";}

        else if (computerChoice === "scissors") {
            return "You won, the computer had scissors!"
        }
        else {

        }
    


}
if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
        return "The computer won this round with scissors!";}

        else if (computerChoice === "rock") {
            return "You won, the computer had paper!"
        }
        else {

        }
    


}
if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
        return "The computer won this round with rock!";}

        else if (computerChoice === "paper") {
            return "You won, the computer had paper!"
        }
       else {
       }
    


}

}


let humanChoice = "ROCK"

let computerChoice = computerPlay()
humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);
console.log(computerChoice);
console.log(playRound(humanChoice,computerChoice));
