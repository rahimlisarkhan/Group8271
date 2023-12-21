"use strict";

//? 1. Hoisting for variable

// a = 5;

// var a;
// // let a;

// console.log(a); //? 5

//? 2. Hoisting for variable

B();

function B() {
  console.log("B working...");
}

// var B = () => {
//   console.log("B working...");
// };

//? 3. Function scope hoisting
function doSomething() {
  b = 33;
  console.log(b);
  var b;
}

doSomething();
