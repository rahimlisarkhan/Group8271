// var a = 5;

// var b = 4;

// var c = b * a + 5;
// console.log("c", c);

// var a = 5;

// var b = 4;

// var c = b * a + 5;
// console.log("c", c);

// var e = 10;

// function hesablayan(num1, num2, num3, num4) {
//   console.log("-----");
//   console.log(num1);
//   console.log(num2);

//   console.log(num3);
//   console.log(num4);
//   console.log("-----");
// }

// function hesablayan(num1, num2) {
//   var result = num1 * num2 + 5;

//   console.log("-----");
//   console.log(result);
//   console.log("-----");
// }

// hesablayan(20, 30);
// hesablayan(15, 97);
// hesablayan(11, 9);

// var d = 99;

// var h = e * d + 5;
// console.log("h", h);

// hesablayan();

function handleTotalAmount(myMoney, productCount, productPrice, name) {
  var amount = productCount * productPrice;

  var resultMoney = myMoney - amount;

  var sentence = `Hormetli ${name}! Sizin ${resultMoney} manat pulunuz qaldi.`;

  console.log(sentence);
}

// var personal1Name = "John";
// var personal1Count = 3;
// var personal1CountPrice = 2.5;
// var personal1Money = 20;

// var personal2Name = "Marry";
// var personal2Count = 2;
// var personal2CountPrice = 23.9;
// var personal2Money = 30;

// handleTotalAmount(
//   personal1Money,
//   personal1Count,
//   personal1CountPrice,
//   personal1Name
// );

// handleTotalAmount(
//   personal2Money,
//   personal2Count,
//   personal2CountPrice,
//   personal2Name
// );

// handleTotalAmount(20, 3, 2, "John");

handleTotalAmount(100, 2, 50, "Marry");

// var a = 3;
// var b = 2;
// var c = 5;
// var d = 13;

// function sum(par1, par2) {
//   var result = par1 + par2;

//   console.log("par1", par1);

//   console.log(result);
// }

// sum(c, d); //18

// sum(a, b); // 5

// var arr = [1,2,3,4]

// arr.push(10)

// function yasagoreCevabVeren(userName, userAge) {
//   if (userAge >= 14) {
//     var answer = `Hormetli ${userName} sizi qeydiyyat ucun filan yere yonlendiririk!`;
//     console.log(answer);
//   } else {
//     var answer = `Hormetli ${userName}! Tessuf ki sizin yasiniz ${userAge} bizim standartlara cavab vermir!`;
//     console.log(answer);
//   }
// }

// yasagoreCevabVeren("Beyler", 20);
// yasagoreCevabVeren("Yashar", 12);
// yasagoreCevabVeren("Aygun", 14);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var fruits = ["Mango", "Apple", "Pie", "Ananas"];
var married = [true, false, true, true, false];

function showElements(list, info) {
  console.log("list", list);

  for (var el of list) {
    console.log("el", el);
  }

  if (info == true) {
    console.log("This array length is ", list.length);
  }

  //   return
}

showElements(numbers);

showElements(fruits, true);

showElements(married, true);

var arr1 = [1, 2, 3, 4, 5, 6];

var arr2 = [10, 20, 33, 54, 65, 86];

// for (var el of arr1) {
//   if (el % 2 == 0) {
//     console.log(el);
//   }
// }

// for (var el of arr2) {
//   if (el % 2 == 0) {
//     console.log(el);
//   }
// }

function show2yebolenenler(list) {
  for (var el of list) {
    if (el % 2 == 0) {
      console.log(el);
    }
  }
}

show2yebolenenler(arr1);
show2yebolenenler(arr2);

var fruits = ["Mango", 2, "Pie", true];
