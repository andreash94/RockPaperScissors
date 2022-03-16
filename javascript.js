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
humanChoice = toLowerCase(humanChoice);
if (humanChoice === computerChoice) {
    return "The game is a tie!";
}
if 


}




let humanChoice = "scissors"
let computerChoice = computerPlay()

