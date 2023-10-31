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

function myReduce(list) {}

// var result = numbers.indexOf(100);
// var result = numbers.includes(100);

// var names = ["Sevinc", "Aydan", "Tofiq", "Zehra"];

// var result = numbers.find(function (item) {
//   if (item == 100) {
//     return true;
//   }

//   return false;
// });

// if (result !== undefined) {
//   console.log("var");
// } else {
//   numbers.push(100);
// }

// var result1 = names.sort(function (a, z) {
//   // if (z > a) {
//   if (z > a) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log("result1", result1);

// var newArray = numbers.map(function (item, index, list) {
//   var result = item * 5;

//   return `<div>${result}</div>`;
// });

// var newArray = numbers.filter(function (id, index) {
//   if (id !== 12) {
//     return true;
//   }
//   return false;
// });

// var newArray = numbers.find(function (item, index) {
//   if (item === 0) {
//     return true;
//   }
//   return false;
// });

// console.log("newArray", newArray);

var numbers = [12, 4, 17, 10, 12, 7, 29];
// var text = ["", "", ""];

// var resultMap = numbers.map(function (item) {
//   return item * 2;
// });

var arr = [];

var resultMap = numbers.forEach(function (item) {
  if (item > 10) {
    arr.push(item);
  }
});

console.log(resultMap);

//? arr.map +
//? arr.forEach+
//? arr.filter +
//? arr.reduce +
//? arr.find +
//? arr.sort +
//? arr.every +
//? arr.some +

// var result = text.every(function (item) {
//   if (item !== "") {
//     return true;
//   }
//   return false;
// });

var result = numbers.every(function (item) {
  // if (item !== "") {
  if (item > 10) {
    return true;
  }
  return false;
});

console.log("result", result);
