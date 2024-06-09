
// Question - sum of all natural numbers from 1 to n


function sumOfAllPrime(n){
    let sum = 0;

    for(let i= 1; i <= n ; i++){
        sum += i
    }

    return sum
}

console.log(sumOfAllPrime(100))