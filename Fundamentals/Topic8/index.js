// "use strict";

// // let a = 5;

// // console.log(a);

// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// //? Obj dest

// const myObj = {
//   fullname: "John Doe",
//   age: 20,
//   address: "London",
// };

// // function getData(myData, num2) {
// //   const { fullname, address } = myData;

// //   //   if(fullname.length> 10){

// //   //   }

// //   //   console.log(fullname);
// //   //   console.log(address);
// // }

// // getData(myObj, 100);

// // const result = myObj.fullname;
// // const result = myObj["fullname"];

// // let { age, name } = myObj;
// // let { age, fullname, job = "N/A", address = "Baku" } = myObj;
// // let { age: oldAge, fullname } = myObj; //? change key name
// // let { age: oldAge = 18, fullname } = myObj; //? change key name and added default value

// // const age = 15;

// // let fullname = myObj.fullname
// // let age = myObj.age

// // console.log(job);
// // console.log(oldAge);

// // const arr = ["John", "Marry", "Katty"];

// // // const personal1 = arr[0];
// // const [personal1, personal2, personal3] = arr;

// // // const [value, setValue] = useState();//? [0,function(){}]

// // console.log(personal1);
// // console.log(personal2);
// // console.log(personal3);

// // const [x, y, z] = [1, 2, 3];

// // const { fullname, age } = { fullname: "John", age: 33 };

// // const a = 100;

// // function B(callback) {
// //   console.log("Test2", callback);

// //   callback()
// // }

// // function A(list) {}

// // // A([1, 2, 3]);
// // // A(B);
// // B(A);

// // function qazUstasi(evinKV) {
// //   const result = evinKV * 3;

// //   return result;
// // }

// // function isiqUstasi(evinKV) {
// //   const result = evinKV * 9;

// //   return result;
// // }

// // function qapiUstasi(evinKV) {
// //   const result = Math.floor(evinKV / 12);

// //   return result;
// // }

// // function hesablayan(say, usta) {
// //   const count = usta(55);

// //   const result = say / count;

// //   return result;
// // }

// // const netice = hesablayan(2000, isiqUstasi);

// // const netice2 = hesablayan(1000, qazUstasi);
// // const netice3 = hesablayan(1000, qapiUstasi);

// // console.log("netice", netice);
// // console.log("netice2", netice2);
// // console.log("netice3", netice3);

// // function sum(a, b) {
// //   return a + b;
// // }

// // function vurma(a, b) {
// //   return a * b;
// // }

// function calc(num1, num2, operator) {
//   const result = operator(num1, num2);

//   return `Bu hesablamanin cavabi: ${result}`;
// }

// // // const netice = calc(22, 34, vurma);
// // const netice2 = calc(22, 34, sum);

// // const result = sum(3, 4);

// // console.log(netice);

// const arr = [2, 3, 4, 5, 6];

// function callbackForMap(item, index, list) {
//   // return `<li> ${item} </li>`
//   return item * 2;
// }

// const newArr = arr.map(callbackForMap);

// // callbackForMap()

// el.addEvenListener("click", function () {
//   // callbackForMap()
// });

// const myTofiq = {
//   fullname: "Tofiq",
// };

// // const {fullname:oldFullname} = myTofiq

// // const fullname = myTofiq.fullname

// // console.log('myTofiq',myTofiq);

// const BankAccount = {
//   //? ...
//   monitor: function (callback) {
//     callback(200);
//   },
// };

// function isGoren(vereceyiDeyer) {
//   console.log("vereceyiDeyer", vereceyiDeyer.key);
// }

// BankAccount.monitor(isGoren);

// el.addEventListener("click", isGoren);

// window.onkeydown = isGoren;

const resultVer = (num, callback) => {
  const netice = num * 2;

  const sentence = `Result: ${netice}`;

  callback(sentence);
};

resultVer(100, show);

const show = (str) => {
  console.log("str", str);
};

// function show(str) {
//   console.log("str", str);
// }
