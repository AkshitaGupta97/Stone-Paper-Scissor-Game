let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#you-score");
const computerScoreBoard = document.querySelector("#comp-score");

const computerChoice = () => {
    // stone, paper, scissor
    let option = ["stone", "paper", "scissor"]; // we create here array of options to create in random order
    const randomIdx = Math.floor(Math.random()*3); // to round the number to get 0,1,2
    return option[randomIdx]; // return the random index of the array
}

const DrawGame = (userChoice, computer) => {
    message.innerText = "Draw Game.. Play again"; // show the message to user
    message.style.backgroundColor = "red"; // change the background color to red
}

const showWinner = (userWin, userChoice, computer) => {
    if(userWin){
        userScore++; // increment the user score by 1
        userScoreBoard.innerText = userScore; // show the score to user
        message.innerText = `You wins!, Congratulations. ${userChoice} beats ${computer}`; // show the message to user
        message.style.backgroundColor = "green"; // change the background color to green
    }
    else {
        computerScore++; // increment the computer score by 1
        computerScoreBoard.innerText = computerScore; // show the score to user
        message.innerText = `Computer wins... ${computer} beats ${userChoice}`; // show the message to user
        message.style.backgroundColor = "orangered"; // change the background color to yellow
    }
}

const playGame = (userChoice) => {
    const computer = computerChoice(); // call the function to get the computer choice
    if(userChoice == computer) {
        // draw
        DrawGame(userChoice, computer); // call the function to show the draw game
    }
    else {
        let userWin = true; // to check if user wins or not
        if(userChoice == "stone"){
            if(computer == "paper"){
                userWin = false; // if computer choice is paper then user lose
            }
            else if(computer == "scissor"){
                userWin = true; // if computer choice is scissor then user wins
            }
        }
        else if(userChoice == "paper"){
            if(computer == "scissor"){
                userWin = false; // if computer choice is scissor then user lose
            }
            else if(computer == "stone"){
                userWin = true; // if computer choice is stone then user wins
            }
        }
        else {      // now user choice is scissor
            if(computer == "stone"){
                userWin = false; // if computer choice is stone then user lose
            }
            else if(computer == "paper"){
                userWin = true; // if computer choice is paper then user wins
            }
        }
        showWinner(userWin, userChoice, computer); // call the function to show the winner
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // to access id
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

