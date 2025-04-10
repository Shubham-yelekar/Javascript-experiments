// function fetchPokemon() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Danger"));
//     }, 2000);
//   });
// }

// console.log("Program Starting");

// const asyncCall = async () => {
//   try {
//     const result = await fetchPokemon();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(" was and error");
// };

// asyncCall();
// console.log("Program Complete");

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject({ data: { name: "Monkey", admin: true } });
//     }, 3000);
//   });
// }

// const login = (user) => {
//   if (user.admin === true) {
//     console.log("success");
//   } else {
//     console.log("Failed");
//   }
// };

// const userAdmin = async () => {
//   const res = await fetchUser();
//   login(res.data);
// };

// async function normalFunction() {
//   await userAdmin();
//   console.log("Program Complete");
// }
// normalFunction();

// function fetchFast() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Fast Done");
//     }, 3000);
//   });
// }

// function fetchSlow() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Fast Slow");
//     }, 6000);
//   });
// }

// console.log("Program Stating");

// const fetchData = async () => {
//   const datafast = await fetchFast();
//   console.log(datafast);
//   const dataSlow = await fetchSlow();
//   console.log(dataSlow);
// };

// fetchData();
