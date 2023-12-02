// const obj1 = {
//   fullname: "John",
//   age: 22,
//   job: "dev",
// };

// const result = Object.entries(obj1);
// const result = Object.values(obj1);
// const result = Object.keys(obj1);

// const result = obj1.hasOwnProperty("age");

// const addUniqueKey = (key, value, obj) => {
//   if (obj.hasOwnProperty(key) == true) {
//     delete obj[key];
//     // delete obj.key;
//   } else {
//     obj[key] = value;
//   }

//   return obj;
// };

// // const result2 = addUniqueKey("address", "Lorem", obj1);
// const result2 = addUniqueKey("age", 14, obj1);

// console.log("result2", result2);

// console.log(result); //? [["fullname","John"],["age",22],["job","dev"]]
// console.log(result); //? ["fullname","age","job"]

// const obj2 = {
//   id: 1,
//   ...obj1,
//   job: "Dev",
// };

// const obj3 = {
//   ...obj2,
//   address: "Lorem",
//   city: "Lorem",
// };

// console.log(obj3);

// // const obj2 = obj1;
// const obj2 = { ...obj1 };

// obj2.age = 100;

// console.log(obj1); //? age 22
// console.log(obj2); //? age 100

const listEl = document.querySelector("#listEl");

const info = listEl.dataset;
console.log(info.age);
