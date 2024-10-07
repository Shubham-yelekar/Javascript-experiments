console.log("Rock Paper Scissors?")

function getComputerChoice(){
let ans
 let randomNumber = Math.floor((Math.random()*10)/3 + 1)
  if (randomNumber == '1'){
    ans = 'rock'
  }else if (randomNumber == '2'){
    ans = 'paper'
  }else {
    ans = 'scissors'
  }
 return console.log(ans)

}
console.log(getHumanChoice())
console.log(getComputerChoice())
