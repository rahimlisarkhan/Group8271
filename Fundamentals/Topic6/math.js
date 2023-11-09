// let personal1 = ["John", 33, "Developer", true];

// let personal2 = {
//   name: "John",
//   age: 33,
//   position: "Developer",
//   married: true,
// };

// console.log(personal2.age);

const a = Math.PI;

// const randomNumber = Math.random() * 10;

// const number = 7.5;

// const newNumber = Math.ceil(randomNumber); // 8
// const newNumber = Math.floor(randomNumber); // 7
// const newNumber = Math.round(number);

// const num1 = -11;

// const b = Math.abs(num1);

// console.log(b);

// var arr = [22, 44, 3, 2, 1, 100, 101];
// var arr2 = [...arr]

// var num3 = 103;
// var num5 = 107.2;

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// console.log(Math.min(102, 102.5));

// console.log(Math.min(num3, num5));

// const attack = ["s", "r", "p"];

// const people = ["John", "Anar", "Ulvi", "Nurlana", "Orxan"];

// const randomNum = Math.random() * people.length;

// // const newNum = Math.ceil(randomNum);
// const randomIndex = Math.floor(randomNum);

// console.log(people[randomIndex]);

// const userC = prompt("Your attack");

// gameStart(userC);

// function gameStart(userChoose) {
//   const attact = ["r", "p", "s"];

//   const randomNumber = Math.random() * attact.length;

//   const randomIndex = Math.floor(randomNumber);

//   const compChoose = attact[randomIndex];

//   if (userChoose == "r" && compChoose == "s") {
//     alert("User Winner");
//   } else if (userChoose == "s" && compChoose == "p") {
//     alert("User Winner");
//   } else if (userChoose == "p" && compChoose == "r") {
//     alert("User Winner");
//   } else if (userChoose == compChoose) {
//     alert("Draw Draw");
//   } else {
//     alert("Comp Winner");
//   }
// }

console.log(Math.trunc(13.37));
// expected output: 13
console.log(Math.trunc(42.84));
// expected output: 42
console.log(Math.trunc(0.123));
// expected output: 0
console.log(Math.trunc(-0.123));
// expected output: -0

function randomIntFromInterval(min, max) {
  // min and max included

  const randomNumber = Math.random() * (max - min + 1) + min;

  return Math.floor(randomNumber); // 16
}

console.log(randomIntFromInterval(10, 20));
