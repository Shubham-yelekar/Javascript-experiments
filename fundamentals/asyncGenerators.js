// const randomNumbers = async function* () {
//   while(true){
//   yield new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(Math.floor(Math.random() * 10))
//       }, 1000);
      
//     })
//   }
// }

// const randomNumberObj = randomNumbers()

// const executeRandomNumber = async () => {
//   for await (const number of randomNumberObj){
//     console.log(number);
    
//   }
// }

// executeRandomNumber()

const do50Percent = async function* () {
  while (true) {
    const randomNumber = Math.random()
  if(randomNumber < 0.5){
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("fast")
      }, 500);
    })
  } else {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Slow") 
      }, 3000);
    })
  }
  }
  
}

const do50GenObj = do50Percent()

const execute50 = async function () {
  for await (const number of do50GenObj){
    console.log(number);
    
  }
}

execute50()