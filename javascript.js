

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
    return "The game is a tie!";}

    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";}

            else if (computerChoice === "scissors") {
                return "human"
        }
        else {

        }
    


    }
    else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
        return "computer";}

        else if (computerChoice === "rock") {
            return "human"
        }
        else {

        }
    


    }
    else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
        return "computer";}

        else if (computerChoice === "paper") {
            return "human"
        }
       else {
       }
    


}}



let game = () => {
    let computerScore = 0
    let humanScore = 0
    for (let i = 0; i<5; i++){
        let humanChoice = prompt("What would you like to play? Rock, paper, or scissors?")
        let computerChoice = computerPlay()
        let result = playRound(humanChoice,computerChoice)
        
        if (result === "computer"){
            computerScore = computerScore + 1;
            console.log('The Computer Won');
        }
        
            else if (result === "human"){
            humanScore = humanScore + 1;
            console.log('You Won!')
        }

                else {
                console.log('It was a tie!')}


    
    console.log("Human Choice: ",humanChoice);
    console.log("Computer Choice: ",computerChoice);}




    
console.log("You scored:",humanScore,"The computer scored: ",computerScore)

}


game();

