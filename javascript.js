let computerPlay = () => {
    let randomNum = Math.floor(Math.random()*4)
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

console.log(computerPlay())