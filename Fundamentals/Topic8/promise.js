//? Promise

//? A, B, C, D

// function A() {
//   console.log("Print A");

//   C();
// }

// function C() {
//   console.log("Print C");
// }

// function B(callback) {
//   console.log("Print B");

//   callback();
// }

// B(A);

// function A(resolve, reject) {
//   const data = ["John", "Marry"];
//   //   const data = [];

//   if (data.length > 0) {
//     resolve(data);
//   } else {
//     reject("Error message");
//   }
// }

// const myPromise = new Promise(A);

// return myPromise

// function B(data) {
//   console.log("B", data);

//   return data;
// }

// function C(data) {
//   console.log("C...", data);
// }

// function forError(err) {
//   console.log("err", err);
// }

// myPromise.then(B).then(C).catch(forError);

// const myPromise = new Promise();

const myPromise = navigator.getBattery(); //? new Promise(fucntion)

console.log("myPromise", myPromise);

myPromise
  .then(function (data) {
    console.log("data", data);

    const battery = data.level * 100;

    const progressLevel = document.querySelector("#progressLevel");
    const progresLine = document.querySelector("#progresLine");

    progressLevel.innerHTML = `Your battery: ${battery}%`;
    progresLine.style.width = ` ${battery}%`;
  })
  .catch(function (err) {
    console.log("err", err);
  })
  .finally(function () {
    alert("Hesablandi....");
  });
