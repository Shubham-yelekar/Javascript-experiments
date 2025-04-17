const store = {
  name: null,
  stock: [
    { name: "candy", qunatity: 100 },
    { name: "fruits", qunatity: 7 },
    { name: "toys", qunatity: 23 },
  ],
};

const myStore = {};

myStore.name = "My Wonderfull Store";
myStore.__proto__ = store;

const yourStore = {};

yourStore.name = "Not My Wonderfull Store";
yourStore.__proto__ = store;

myStore.stock[1].qunatity = 300;
yourStore.stock[2].qunatity = 400;

const twoStore = {};
twoStore.__proto__ = store;
console.log(myStore.stock);
console.log(yourStore.stock);
console.log(twoStore.stock);
// console.log(yourStore.__proto__);
