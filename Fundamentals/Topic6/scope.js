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

var a = 1;

function A() {
  //   var a = 2;

  function B() {
    // var a = 8;

    console.log("B-nin dunyasi:", a);
  }

  B();
}

A();
