//? Primtive

//? Number
//? String
//? Boolean
//? Null
//? Undefined

var age = 24; //? integer
var productPrice = 7.9; //? float

var fullname = "John Doe";
var position = "Developer";
var about = `Lorem ipsum color`;

var married = false;
var access = true;

// var imageUrl = "https://dsdass.com/g.jpg";
// var imageUrl = null;

// var description = undefined;

// var num1 = 11;

// var num2 = num1;

// num1 = 15;

// console.log(num1);
// console.log(num2);

var a = 7;

// a = a + 12;
// a += 12;
a *= 12;
// a -= 12;

console.log(a);

// var b = 88;

// var c = a * (b - 2);

// console.log(c);

// var b = a + 4;
// var b = a - 2;
// var b = a * 2;
// var b = a / 2;
// var b = a % 2;
// var b = a ** 2;

// var b = a + "2";
// var b = a - "2";

// console.log(b);

var a = 5;

// var b = "5";
var b = 3;

var result = a == b;
// var result = a != b;
// var result = a === b;
// var result = a !== b;

// var result = a > b;
// var result = a < b;
// var result = a <= b;

// console.log("result", result);

var age = 14;

// if (age >= 18) {
//   console.log("Cix sinifden!");
// } else {
//   console.log("Kunce get");
// }

// if (result == true) {

// if (a == b) {
//   console.log("beraberdir");
// } else {
//   console.log("NOT!");
// }

// var personal = "Marry";

// var age = 27;

// if (age >= 18) {
//   var result = `Buyur kec iceri ${personal}. Cunki senin yasin ${age}-dir`;

//   console.log(result);
// } else {
//   var result = "Qadagandir";
//   console.log(result);
// }

// const number1 = 31;
// const number2 = 2;

// const age = number1 % number2;

// const num = 32;

// if (num % 2 == 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

// var result = num % 2;

// console.log(result);

// var emptyString = "";
// var zero = 0;
// var a = null;
// var b = undefined;
// var bol = false;

var citizen = "az";

var married = true;

// var result = married === false && age >= 18 && citizen === "az";
var result = married === false || age >= 18 || citizen === "az";

// console.log("result", result);

// if (married === false || age >= 18 || citizen === "az") {
//   console.log("Derse xos geldin!");
// } else {
//   console.log("Biz sizle elaqe saxlayacagiq");
// }

// if (age >= 18) {
//   console.log("big bro");
// }

// if (age >= 18) {
//   console.log("big bro");
// } else {
//   console.log("Hmm");
// }

// var age = 15;

// if (age >= 18) {
//   console.log("18den boyukdur!");
// } else if (age < 18 && age > 14) {
//   console.log("Uygun ola biler!");
// } else if (age < 14 && age > 11) {
//   console.log("Uygun ola biler!");
// } else {
//   console.log("Uygun yerimiz yoxdur");
// }

// alert("Hey");

// confirm("Eminsenmi?");
// var result = prompt("Imtahan neticevizi yazin");

// var result = 110;

// if (result >= 80 && result <= 100) {
//   console.log("Woow.Siz A aldiz");
// } else if (result >= 70 && result < 80) {
//   console.log("Hmmm.Siz B aldiz");
// } else if (result >= 60 && result < 70) {
//   console.log("Hmmm.Siz C aldiz");
// } else if (result >= 50 && result < 60) {
//   console.log("Hmmm.Siz D aldiz");
// } else if (result > 0 && result < 50) {
//   console.log("Hmmm.Siz F aldiz");
// } else {
//   console.log("Daxil etdiyiniz netice duzgun deyil");
// }

// var userAge = prompt("Yasinizi daxil edin");

// if (userAge >= 18) {
//   console.log("Uniersitet vaxtidi");
// } else if (userAge == 16) {
//   console.log("Hazirliqlara baslamalisan!");
//   alert("Hazirliqlara baslamalisan!");
// } else {
//   console.log("Narahat olma");
// }

// var q1 = confirm("Imtahana hazirlasirsan?");

// console.log(q1);

var q1 = confirm("Goy uzunun rengi mavidirmi?");

// if(q1)
//! 1ci sert
//! -----------------------------
if (q1 == true) {
  console.log("Aferin ugurlu oldu!");

  var q2 = prompt("Yarpagin rengi nedir?");

  //! 2ci sert
  //! -----------------------------
  if (q2 == "yasil") {
    console.log("Aferin ugurlu oldu! Sizin xaliniz:20");

    var q3 = prompt("Doner xosluyursan?");

    //! 3ci sert
    //! -----------------------------
    if (q2 == "yasil") {
      console.log("Aferin ugurlu oldu! Sizin xaliniz:20");
    } else {
      console.log("Sizin xal:10");
    }
    //! -----------------------------
  } else {
    console.log("Sizin xal:10");
  }
  //! -----------------------------
} else {
  console.log("Sizin xal:0");
}
//! -----------------------------
