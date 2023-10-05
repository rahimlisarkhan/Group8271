//? Array
// var arr1 = [12, 20, 25, 30, 45];

//! PUSH
// arr1.push(105);
// arr1.push(45);

//! POP
// var sildiyi = arr1.pop();

//! Shift and Unshift
// arr1.shift();
// arr1.unshift(103);
// arr1.unshift(11);

//! JOIN
// var convertString = arr1.join(" ");

//! includes & indexOf
// var result = arr1.includes(25);
// var result = arr1.indexOf(105);

// console.log(result);

// if(result ==true){

// }else{

// }

// if(result !==-1){

// }else{

// }
// console.log("sildiyi", sildiyi);
// console.log("convertString", convertString);

var arr1 = [12, 20, 25, 30, 45, 101, 102, 105, 1001];

// var lastElementIndex = arr1.length - 1;
// var lastEl = arr1[lastElementIndex];

// console.log("lastEl", lastEl);

// if (arr1.length > 1) {
//   console.log("Bos yerimiz yoxdu");
// } else {
//   console.log("Vakansiya var");
// }

// arr1.splice(4, null, 109, "Banana", "Cake");
// arr1.splice(arr1.length - 3, 3);
// arr1.splice(2, 3);
arr1.splice(2, 1, 210, 310, 400);

// arr1.splice(2, 0, 210, 310, 400);

console.log(arr1);
