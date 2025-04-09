// console.log("Program started");


// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({data: "Hello, Friend", error: null})
//     }, 5000);
// })

// console.log(myPromise);
// console.log("Program in progress")

// myPromise.then((val)=>{
//     console.log(val);
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve('First Promise chain complete')
//         }, 2000);
//     })
// }).then((val)=>{
//     console.log(val);
    
// })


// myPromise.then((val)=>{
//     console.log(val);
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{resolve("Secound promise")}, 10000)
    
//     })
// })
// .then((val)=>{
//     console.log(val);
// })

const giveTen = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 3000);
})

const giveTwenty = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(20)
    }, 5000);
})

Promise.all([giveTen,giveTwenty]).then((val)=>{
    console.log(val[0] + val[1]);
    
})