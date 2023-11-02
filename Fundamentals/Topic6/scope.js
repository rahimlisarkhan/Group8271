// // var result = 2;

// function A() {
//   var result = 5;

//   return result;
// }

// console.log(result);

// var a = 1;

// var result = 100;

// function sum() {
//   //   var a = 10;
//   //   var result = 20;
//   //   console.log("a", a);
//   console.log(result);
// }

// console.log(result);

// sum();

// console.log("result", result);

// var a = 10;

// function A(num1) {
//   //   var a = 100;

//   //   console.log(a);

//   return a + num1;
// }

// var result = A(66);

// console.log(result); //? 166

// let const var

// let a = 1;

// function A() {
//   // let a = 2;

//   function B() {
//     // let a = 8;

//     console.log("B-nin dunyasi:", a);
//   }

//   B();
// }

// A();

// function A() {
//   return 100;
// }

// // var result5 = A();

// var B = A;

// console.log(B);

// var result = B();

// console.log(result);

// function foo() {
//   function bar() {
//     return 200;
//   }

//   // return bar; //? 200
// }

// // var A = foo;
// var A = foo; //? 200

// console.log(A);

// var outerFunction = function () {
//   var x = 5;

//   var nestedFunction = function () {
//     var y = 7;

//     // What will this print? (x = 5)
//     console.log("X: " + x);

//     // What will this print? (y = 7)
//     console.log("Y: " + y);

//     var z = 10;
//     // What will this print? (z = 10)
//     return "Z (inside): " + z;
//   };

//   return nestedFunction; //
// };

// var myFunction = outerFunction;

// var my2Fn = myFunction();

// console.log(my2Fn());
var d = 10;

var A = function () {
  // var d = 20;

  function B() {
    var g = 3.13;

    return g;
  }

  return d;
};

// var result = A();

// console.log(result);

// Situation 1
// ------------------------------------------
var myVar1 = 1;

// function a1() {
myVar1 = 5 - 3;

//   b1();
//   alert("Q1 | a: " + myVar1);
// }

// function b1() {
//   alert("Q1 | b: " + myVar1);
// }

// a1();

// Here myVar2 (global) is 1
// var myVar2 = 1;

// function a2() {
//   // Here myVar2 (local) is 2

//   var myVar2 = 5 - 3;

//   alert("Q2 | a: " + myVar2);
// }

// a2();
