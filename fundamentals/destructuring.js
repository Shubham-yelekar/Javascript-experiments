// const snacks = {
//   chips: { name: "Pringles", salty: true },
//   candy: { name: "Twizzlers", salty: false },
//   chocolate: { name: "Mars", salty: false },
// };

// const { candy, fruit = { name: "Banana", salty: false } } = snacks;

// console.log(candy, fruit);

// const store = new Map();
// store.set("Cups", 46);
// store.set("Candles", 121);
// store.set("Vases", 15);

// for (const [key, values] in store) {
//   console.log(key, "=>", values);
// }

function xyzCalc({ x, y, z }) {
  return 5 * x - 2 * y - z;
}

console.log(xyzCalc({ x: 20, y: 2, z: 7 }));

console.log(xyzCalc({ x: 2, y: 1, z: 20 }));

console.log(xyzCalc({ x: 100, y: 100, z: 100 }));
