class Players {}

const hanSolo = new Players();

console.log(hanSolo);
console.log(hanSolo.__proto__);
console.log(hanSolo.__proto__.__proto__);
console.log(hanSolo.__proto__.__proto__.__proto__);

console.log(Object.getPrototypeOf(hanSolo.__proto__));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
