// var arr = [1, 2, 3, 4, 5, 6, 7];

// arr[0] = 100;

// var arr2 = arr.concat();

// console.log("arr", arr);
// console.log("arr2", arr2);

// var a = [4, 5];
// var b = [11, 34];

// var c = [...b, ...a];
// var c = [55, ...a];

// a[0] = 100;

// console.log("a", a);
// console.log("c", c);

// function A(num1,num2 ,...params) {
//   console.log(num1);
//   console.log(num2);
//   console.log(params);
// }

// A(12, 34, 56, 45, 76, 101);

// function sum(a, b) {

function sum(...numbers) {
  var count = 0;

  var i = 0;
  while (i < numbers.length) {
    count = count + numbers[i];

    i++;
  }

  return count;
}

var result1 = sum(12, 45, 44, 33, 126, 88);

console.log(result1);
