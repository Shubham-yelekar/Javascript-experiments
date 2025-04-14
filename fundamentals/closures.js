// const createCounter = () => {
//   let counter = 0;

//   const incrementCounter = () => {
//     counter++;
//     console.log(counter);
//   };

//   return incrementCounter;
// };

// const counter = createCounter();
// counter();
// counter();
// counter();

const stringBuilder = () => {
  let result = "";

  const add = (char) => {
    return (result = result + " " + char);
  };

  return add;
};

const builder = stringBuilder();
let text = builder("Hello");
text = builder("Friend");
text = builder("Bye");
console.log(text, "closures.js line 31");
