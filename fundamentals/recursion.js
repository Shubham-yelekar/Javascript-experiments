// const fizbuzz = (startNum, endNum) => {
//   if (startNum === endNum + 1) {
//     return;
//   }

//   if (startNum % 3 === 0 && startNum % 5 === 0) {
//     console.log(`FizzBuzz : ${startNum}`);
//   } else if (startNum % 3 === 0) {
//     console.log(`Fizz : ${startNum}`);
//   } else if (startNum % 5 === 0) {
//     console.log(`Buzz : ${startNum}`);
//   } else {
//     console.log(`${startNum}`);
//   }

//   fizbuzz(startNum + 1, endNum);
// };

// fizbuzz(5, 24);

// palindron check
// const palindrome = (str) => {
//   if (str.length === 0) return true;
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];

//   if (str[0] !== str[str.length - 1]) return false;
//   return palindrome(str.slice(1, -1));
// };

// console.log(palindrome("wow"));
// console.log(palindrome("bobcae"));
// console.log(palindrome("wow"));

// Flatten an Array

const flatten = (arr) => {
  const result = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      const flat = flatten(value);
      result.push(...flat);
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(flatten([1, 2, 3, 4]));
console.log(flatten([1, 2, [3, 4]]));
console.log(flatten([1, 2, [3, 4, [5, 6]]]));
