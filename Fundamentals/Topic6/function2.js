// var a = 5

// a = 10

// console.log(a);

// function A() {

//   return 5;
// }

// var result = A(); //5

// var result2 = A();

// console.log(result);
// console.log(result2);

// function sum(num1, num2) {
//   var result = num1 + num2;

//   return result;
// }

// var sumResult = sum(31, 34); //! 65
// var sumResult2 = sum(43, 67); //! 110

// var sumResult3 = sum(3, 9); //! 12

// console.log(sumResult);
// console.log(sumResult2);
// console.log(sumResult3);

// function vurmaEmeliyyati(a = 0, b = 0) {
//   console.log(a - b); //! NOT a Number  NAN
// }

// vurmaEmeliyyati();

// function sayHello(name = "Musteri") {
//   var result = `Hormetli ${name}! Salam!`;

//   console.log(result);
// }

// // sayHello("Anar");

// // var fullname = prompt("Adinizi Qeyd edin");
// sayHello();

// var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var numbers2 = [22, 25, 36, 47, 58, 69, 70, 80, 90];

// var numbers3 = [1, 27, 3, 4, 58, 69, 7, 88, 9];

// function sumOfNumberArray(arr) {
//   var sum = 0;

//   for (var el of arr) {
//     sum = sum + el;
//   }

//   return sum;
// }

// var result1 = sumOfNumberArray(); //! 45

// var result2 = sumOfNumberArray(numbers2); //! 497

// var result3 = sumOfNumberArray(numbers3); //! 266

// console.log(result1);

// console.log(result1, result2, result3);

// function married(m) {

//   if (m == true) {
//     return "Yes";
//   } else {
//     return "No";
//   }

// }

// var result = married();

// console.log(result);

// function convertMonthName(num) {
//   if (num == 0) {
//     return "Yanvar";
//   } else if (num == 5) {
//     return "Iyun";
//   } else if (num == 10) {
//     return "Noyabr";
//   } else {
//     return "Not found";
//   }
// }

// var result = convertMonthName(2);

// console.log(result);

// it("2 is even", () => {
//   assert.strictEqual(evenOrOdd(2), "Even");
// });
// it("7 is odd", () => {
//   assert.strictEqual(evenOrOdd(7), "Odd");
// });
// it("-42 is even", () => {
//   assert.strictEqual(evenOrOdd(-42), "Even");
// });
// it("-7 is odd", () => {
//   assert.strictEqual(evenOrOdd(-7), "Odd");
// });
// it("0 is even", () => {
//   assert.strictEqual(evenOrOdd(0), "Even");
// });

function evenOrOdd(number) {
  var result = number % 2;

  if (result == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var result1 = evenOrOdd(-42);

console.log(result1);
