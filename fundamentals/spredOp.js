// const view = [
//   [5, 10, 20],
//   [10, 20, 30],
// ];
// const viewCopy = [...view];

// viewCopy[1] = 40;
// view[0].pop();
// view.push([66, 58]);
// viewCopy.push([100, 200]);

// console.log(view);
// console.log(viewCopy);

const animal = {
  name: "Koala",
  kingdom: "Australia",
  cute: true,
  friends: [{ name: "Kangaroo", kingdom: "Australia" }],
};

const koala = { ...animal, tail: false };

animal.cute = false;

animal.friends[0].cute = false;

console.log(animal);
console.log(koala);
