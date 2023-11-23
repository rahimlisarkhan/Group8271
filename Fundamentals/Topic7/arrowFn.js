// function A() {}

// var B = function () {};

// A();
// B();

var B = function () {};

//? Example 1
var B = (a, b) => {
  return a + b;
};

//? Example 2
// var B = a => {
//   return a + 5;
// };

//? Example 3
// var B = (a, b) => {
//   let t = 13;

//   if (t > 10) {
//     return t;
//   }

//   return a + b;
// };

// //? Example 4
// var B = (a, b) => a + b;

//? Example 5
// var B = (a, b) =>(`
// <li>${a} ${b}</li>

// `);

// var myFunction1 = ()=>{

//     return 7
// }

// var myFunction2 = ()=>(
//     ""
// )

// B(1, 2);

const str = "Hello";

function myFn(s) {
  let convertList = s.split("");

  let newStr = convertList.join("-");

  return newStr;
}

const myFn = (s) => s.split("").join("-");

const arr = [2, 3, 5, 8];

const newList = arr.map(function (item) {
  return item * 2;
});

// const newList2 = arr.map((item, index) => item * 2);
const newList2 = arr.sort((a, z) => a - z);

// const newList3 = arr.sort((a, z) => z - a);
// const newList3 = arr.sort(function (a, z) {
//   if (a < z) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const myFn2 = (s) => console.log("Hello");

// const myFn = (s) => {
//   let convertList = s.split("");

//   let newStr = convertList.join("-");

//   return newStr;
// };

// const myFn = (s) => {
//   let newStr = s.split("").join("-");

//   return newStr;
// };

// const myFn = (s) => s.split("").join("-");

// myFn(str);
