const buttons = document.querySelectorAll('.secondary-btn');
const compScoreDisplay = document.getElementById('com-score');
const userScoreDisplay = document.getElementById('user-score');
const rockEmoji = '🤟';
const scissorsEmoji = '✂️';
const paperEmoji ='📰';

let userScore = 0; // Initialize user's score
let computerScore = 0; // Initialize computer's score

function updateScore(verdict) {
  if (verdict === 'User Wins') {
    userScore++;
  } else if ( verdict === 'Computer Wins' ){
    computerScore++; 
  } 
  userScoreDisplay.textContent = userScore; 
  compScoreDisplay.textContent = computerScore; 
}

function getComputerChoice(){

let ans
let ansEmoji
 let randomNumber = Math.floor(Math.random()*3)
  if (randomNumber == '0'){
    ans = 'rock'
    ansEmoji = rockEmoji
  }else if (randomNumber == '1'){
    ans = 'paper'
    ansEmoji = paperEmoji
  }else {
    ans = 'scissors'
    ansEmoji = scissorsEmoji
  }
  console.log("Comp" , ans)
  document.getElementById('computer-choice').textContent = ansEmoji;
  return ans;

}

buttons.forEach((button) =>{
  button.addEventListener('click', HandleChoice)
})

function HandleChoice(e) {
  const computerChoice = getComputerChoice();
  const userChoice = e.target.value; 
 
    // Update user choice display with the corresponding emoji
    if (userChoice === 'rock') {
      document.getElementById('user-choice').textContent = rockEmoji; // Use the rock emoji
  } else if (userChoice === 'paper') {
      document.getElementById('user-choice').textContent = paperEmoji; // Use the paper emoji
  } else if (userChoice === 'scissors') {
      document.getElementById('user-choice').textContent = scissorsEmoji; // Use the scissors emoji
  }
  if(computerChoice === userChoice) {
      console.log("Tie")
      return updateScore("Tie")
  } else if (computerChoice !== userChoice) {
    if ((computerChoice === 'rock' && userChoice === 'scissors') ||
      (computerChoice === 'scissors' && userChoice === 'paper') ||
      (computerChoice === 'paper' && userChoice === 'rock') 
    ){
      console.log("Computer Wins")
      return updateScore("Computer Wins")

    } else {

      console.log("User Wins")
      return updateScore("User Wins")
    }
}
  
}



