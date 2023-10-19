// var month = 1;

// if (month == 0) {
//   console.log("January");
// } else if (month == 1) {
//   console.log("February");
// } else if (month == 2) {
//   console.log("March");
// }

// switch (month) {
//   case 0:
//     console.log("January");
//     break;
//   case 1:
//     console.log("February");
//     break;
//   case 2:
//     console.log("March");
//     break;
//   default:
//     console.log("Bu ay indexi tapilmadi");
// }

// var month = prompt("istediyiniz ayin indexni yazin");

// switch (+month) {
//   case 0:
//     alert("Jan");
//     break;
//   case 1:
//     alert("feb");
//     break;
//   case 2:
//     alert("march");
//     break;
//   case 4:
//     alert("may");
//     break;
//   case 5:
//     alert("jun");
//     break;
//   case 6:
//     alert("july");
//     break;
//   case 7:
//     alert("august");
//     break;
//   default:
//     alert("wrong month index");
// }

// var firstNumber = parseInt(prompt("Birinci reqemi yaz"));
// var secondNumber = parseInt(prompt("Ikinci reqemi yaz"));
// var operator = prompt("Operatoru qeyd edin.Misal: '+ - * /' ");

// switch (operator) {
//   case "+":
//     alert(firstNumber + secondNumber);
//     break;
//   case "-":
//     alert(firstNumber - secondNumber);
//     break;
//   case "*":
//     alert(firstNumber * secondNumber);
//     break;
//   case "/":
//     alert(firstNumber / secondNumber);
//     break;
//   default:
//     alert("Duzgun operatoru secin!");
//     break;
// }

// var personalCount = prompt("Teleberivizin sayi?");

// var listForPeople = [];

// for (var i = 1; i <= personalCount; i++) {
//   var q1 = `${i} nomreli telebevizin adi?`;

//   var answer = prompt(q1);

//   listForPeople.push(answer);
// }

// for (var per of listForPeople) {
//   var welcomePersonal = `Xos geldiniz hormetli ${per}`;

//   console.log(welcomePersonal);
// }

// console.log(listForPeople);

// var nums = [32, 34, 54, 6, 47, 87];

// var sum = 0;

// console.log(sum);

// var names = ["TitaniC", "iconiC", "apple", "ironic", "mango", "sirus"];

// var list = [901, 801, 701, 601, 501, 401, 301];

// var text = "";

// for (var i = 0; i < list.length; i++) {
//   var el = list[i];
//   var stringEl = el.toString();

//   // var result = stringEl[0] + "-" + stringEl[1]; // 9-0-

//   // var lastIndex = i == list.length - 1;

//   // console.log("lastIndex", lastIndex);

//   // if (lastIndex == true) {
//   //   text = text + result;
//   // } else {
//   //   text = text + result + "-";
//   // }

//   // console.log(result);
// }

// console.log(text);

// text += 2;
// text += 4;
// text += 10;

// console.log(text);

// var text = "9-0-8-0-7-0-6-0-5-0-4-0-3-0";

// var i = 0;

// while (i < list.length) {
//   console.log(i);

//   i = i + 1;
// }

// var num = 100;
// var newNum = num.toFixed(2);
// var newNum = num.toString();

// console.log(typeof newNum);

// var fullname = "90";
// console.log(fullname[0]);

// var nums = [12, 43, 54, 65];
// var num2 = [];

//? input [12, 43, 54, 65]

//? output [24, 86, 108, 130]

var list = [
  "John",
  2000,
  32,
  true,
  "Marry",
  1200,
  24,
  false,
  "Siri",
  3000,
  26,
  false,
];

//? output ["John","Marry","Siri"]

typeof el == "string";
