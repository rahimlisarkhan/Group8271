// var arr = ["salam", "hello", 3, 4, 5, 6];
// var arr = [20, 40, 3, 4, 5, 6, 100, 77, 200];

// for (var i = 10; i > 0; i = i - 1) {
// for (var i = 0; i < 10; i = i + 1) {

// var arrTam = [];

// for (var i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);

//   var num = arr[i];

//   if (num % 2 == 0 && num % 5 == 0) {
//     // console.log(num);

//     arrTam.push(num);
//   }

//   //   var result = i % 2 == 0;
//   //   if (result == true) {
//   //     console.log(i);
//   //   }
// }

// console.log(arrTam);

var people = [
  "Asyleh",
  "Marry",
  "AgA",
  "Aygun",
  "Anar",
  "ayxan",
  "A4",
  "Orxan",
  "Yusif",
];

var reverseArr = [];

for (var i = people.length - 1; i >= 0; i--) {
  var el = people[i];
  reverseArr.push(el);
}

console.log(reverseArr);

// var result = people.reverse();

// console.log("result", result);

// var aIleBaslayan = [];

// for (var el of people) {
//   var kicikStr = el.toLowerCase();

//   console.log(kicikStr);

//   if (kicikStr.startsWith("a") == true) {
//     aIleBaslayan.push(el);
//   }
// }

// for (var i in people) {
//   var el = people[i];
//   var kicikStr = el.toLowerCase();

//   if (kicikStr.startsWith("a") == true) {
//     aIleBaslayan.push(el);
//   }
// }

// for (var i = 0; i < people.length; i += 1) {
//   var el = people[i];
//   var kicikStr = el.toLowerCase();

//   if (kicikStr.startsWith("a") == true) {
//     aIleBaslayan.push(el);
//   }
// }

// console.log(aIleBaslayan);
