// var a = 5;

// var b = 4;

// var c = 2;

// var f = "fullname";

// var list = [5, 4, 99, "fullname"]; //? Array

// var result = list[3];

// var a = 5

// a = 12

// console.log(a); //12

// list[2] = 101;

// console.log(list);

// console.log(list[2]);

// var a = 500;

// var b = a + 50;

// a = 0;

// console.log("b deyeri", b);
// console.log("a deyeri", a);

// var c = "Rest";

// var d = c;

// c = "R";

// console.log(c);
// console.log(d);

// ("| R | | | REST | |"); //? STACK

// var arr1 = ["Mango", "Pie", "Watermaloon", "Banana", "Ezgil"]; //? HEAP

// var arr2 = arr1;

// arr1[1] = "Apple";

// console.log("arr1", arr1);
// console.log("arr2", arr2);

var arr1 = [1, 2, 3, 4, 5, 6];

// var result = arr1[1] + arr1[5];

// arr1[6] = 101;
// arr1[10] = 101;

// console.log(arr1);

// console.log(result);

// var a = 5

// var b = a

// a = 10

// var a = [5, 4, 5, 6, 3];
// var a = [5, "Fullname", true, [1, 2, [77, 88]], null, [56, 66]];

// var result = a.flat(2);

// console.log(result);

// var b = [45, 3];

// var c = a.concat();

// a[0] = 101;

// console.log(c);

// a.splice(0, null, "Banana");
// a.splice(0, 1);
// a.splice(a.length - 1, 1);

// a.reverse();

// a[0] = 10;

var arr = [1, 2, 3, 4, 5, 88];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

var myVar2 = 1;

// function a2() {
//   b2(myVar2); //?

//   // Here myVar2 (global) is 2
//   myVar2 = 5 - 3;

//   c2(myVar2);

//   alert("Q2 | a: " + myVar2);
// }

// function b2(par1) {
//   // Here we are making use of the "global" version of myVar2.
//   // So the below alert message never "saw" the change.
//   alert("Q2 | b: " + par1);
// }

// function c2(par2) {
//   // Here we are making use of the "global" version of myVar2.
//   // So the below alert message never "saw" the change.
//   console.log("Q4 | c: " + par2);
// }

// a2();

let placeholder;

// //what happens here?
console.log("This is outside the function: " + placeholder);

scopeDemo("Jerome");

function scopeDemo(myName) {
  console.log("This is inside the function: " + myName);
  //   var placeholder = myName;
  placeholder = myName;
}
