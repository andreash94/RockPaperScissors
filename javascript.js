
let computerScore = 0
let humanScore = 0

let computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    }

    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

let playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "The game is a tie!";
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        }

        else if (computerChoice === "scissors") {
            return "human";
        }
        else {
        }



    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "computer";
        }

        else if (computerChoice === "rock") {
            return "human";
        }
        else {
        }



    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer";
        }

        else if (computerChoice === "paper") {
            return "human";
        }
        else {
        }



    }
}


const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  humanChoice = 'rock'
  game();
});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  humanChoice = 'paper'
  game();
});
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  humanChoice = 'scissors'
  game();
});

    


let game = () => {
    
    
        
        
        let computerChoice = computerPlay()
        let result = playRound(humanChoice,computerChoice)
        
        if (result === "computer"){
            computerScore = computerScore + 1;
            document.getElementById("scores").innerHTML = ('<p>Your score is: ' + humanScore + ' The computer score is: ' + computerScore + '</p>')
            document.getElementById("outputs").innerHTML = ('The computer won! The computer chose ' + computerChoice + ' and you chose ' + humanChoice)
            
        }
        
            else if (result === "human"){
            humanScore = humanScore + 1;
            document.getElementById("scores").innerHTML = ('<p>Your score is: ' + humanScore + ' The computer score is: ' + computerScore + '</p>')
            document.getElementById("outputs").innerHTML = ('You won! The computer chose ' + computerChoice + ' and you chose ' + humanChoice)
            
        }

                else {
                document.getElementById("scores").innerHTML = ('<p>Your score is: ' + humanScore + ' The computer score is: ' + computerScore + '</p>')
                document.getElementById("outputs").innerHTML = ('It was a tie! The computer chose ' + computerChoice + ' and you chose ' + humanChoice)
               



    
    





    



}

if (computerScore < 5 && humanScore < 5) {
}
else if (computerScore > 4)  {
    computerScore = 0
    humanScore = 0  
    document.getElementById("scores").innerHTML = ('<p>The game has finished and reset with the computer reaching 5 first! The human score is now ' + humanScore + ' And computer score ' + computerScore + '</p>')
    document.getElementById("outputs").innerHTML = ('The computer won! The computer chose ' + computerChoice + ' and you chose ' + humanChoice)
}
else {
    computerScore = 0
    humanScore = 0  
    document.getElementById("scores").innerHTML = ('<p>The game has finished and reset with you reaching 5 first! The human score is now ' + humanScore + ' And computer score ' + computerScore + '</p>')
    document.getElementById("outputs").innerHTML = ('You won! The computer chose ' + computerChoice + ' and you chose ' + humanChoice)
}
}
