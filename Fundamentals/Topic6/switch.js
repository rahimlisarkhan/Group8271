var month = 1;

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

var personalCount = prompt("Teleberivizin sayi?");

var listForPeople = [];

for (var i = 1; i <= personalCount; i++) {
  var q1 = `${i} nomreli telebevizin adi?`;

  var answer = prompt(q1);

  listForPeople.push(answer);
}

for (var per of listForPeople) {
  var welcomePersonal = `Xos geldiniz hormetli ${per}`;

  console.log(welcomePersonal);
}

// console.log(listForPeople);
