// const result = a("url....");

// console.log(result); //? salam5

// const myPromiseDersDeyrem = new Promise(function (res, rej) {
//   const car = [1, 2, 3, 4];

//   if (car.length > 0) {
//     res(car);
//   } else {
//     rej("Error");
//   }
// });

// async function Isleyen1() {
const Isleyen1 = async () => {
  // const b = await myPromiseDersDeyrem;

  const response = await fetch(
    "https://www.omdbapi.com/?apikey=a407a7b3&s=titanic"
  ); //? bu fetch() bize 1ci promise qaytarir;

  const data = await response.json(); //? bu .json() fn ise bize 2ci defe promise qaytarir;

  console.log("response", response);
  console.log("data", data);

  ekrandaFilmleriGoster(data.Search);

  // console.log("b2", b2);

  // function B() {
  //   return 10;
  // }

  // const result = B();

  // const total = b.reduce((sum, item) => sum + item);

  // console.log(total);
};

async function Isleyen2() {
  const b = await myPromise;

  console.log("b", b);
}

Isleyen1();

// Isleyen2();

navigator.getBattery();

async function getBatteryLevel() {
  const data = await navigator.getBattery(); //? bu navigator.getBattery() hisse size promise qaytarir;

  const battery = data.level * 100;

  const progressLevel = document.querySelector("#progressLevel");
  const progresLine = document.querySelector("#progresLine");

  progressLevel.innerHTML = `Your battery: ${battery}%`;
  progresLine.style.width = ` ${battery}%`;
}

getBatteryLevel();
