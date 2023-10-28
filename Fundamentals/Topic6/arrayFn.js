// var arr = [
//   2, 4, 6, 8, 10,
//   //   true,
//   //   "string",
//   //   null,
//   //   function A() {
//   //     console.log("a fn");
//   //   },
// ];

// arr.push(function max() {});

// var AFunksiyasi = arr[8];

// AFunksiyasi();

// function hesablayan(sum, item) {
//   return sum + item;
// }

// var result = numbers.reduce(function (sum, item) {
//   return sum + item;
// }, 1000);

// var result = numbers.map(function (item, index, list) {
//   //   if (list.length - 1 === index) {
//   //     return `<li class="bg-danger text-primary h6">${item}</li>`;
//   //   }

//   return item + 10;
//   //   return `<li class="bg-danger text-warning h6">${item}</li>`;
// });

// console.log(result);

// var filterResult = numbers.filter(function (el, i) {
//   //   if (el > 5) {
//   //     return true;
//   //   }

//   //   if (el !== 8) {
//   //     return true;
//   //   }

//   //   if (i !== 2) {
//   //     return true;
//   //   }

//   if (i > 3) {
//     return true;
//   }

//   return false;
// });

// // console.log(filterResult);

// var result2 = filterResult.filter(function (el, index) {
//   if (el !== 32) {
//     return true;
//   }

//   return false;
// });

// console.log(result2);

var numbers = [2, 4, 7, 9, 10, 11, 32];

var result = numbers
  .filter(function (item) {
    if (item % 2 == 0) {
      return true;
    }

    return false;
  })
  .reduce(function (sum, item) {
    return sum + item;
  });

var text = "Anar";

var resultText = text.toLowerCase().split("");

// var result2 = result.reduce(function (sum, item) {
//   return sum + item;
// });

// console.log(result2);

//? arr.map +
//? arr.forEach
//? arr.filter +
//? arr.reduce +
//? arr.find
//? arr.sort
//? arr.every
//? arr.some

var numbers = [12, 4, 17, 10, 12, 7, 29];

function myReduce(list) {}
