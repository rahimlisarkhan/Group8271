//? https://api.openweathermap.org/data/2.5/

//? 1. Addim URL test elemek
//? 2. Promisimizi  yazmaq
//? 3. Gelen neticeye gore melumati ekranda gostermek ucun seliqeli kenarda bir fn yazmaq

const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");

const movieImg = document.querySelector("#movieImg");
const movieTitle = document.querySelector("#movieTitle");
const movieSubTitle = document.querySelector("#movieSubTitle");
const movieDesc = document.querySelector("#movieDesc");

// const myPromise = new Promise(function (res, rej) {
//   if (car.length > 0) {
//     res();
//   } else {
//     rej();
//   }
// });

// // myPromise.

searchBtn.addEventListener("click", function () {
  const title = searchInput.value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=c17bc3b039b1b73de4e0175c6792ff96`;

  const firstPromiseMethodlariolanObyekt = fetch(url);

  firstPromiseMethodlariolanObyekt
    .then((res) => {
      console.log("res", res);

      const secondPromiseMthodlariolanObyekt = res.json();

      return secondPromiseMthodlariolanObyekt;
    })
    .then((data) => {
      console.log("data", data);

      ekrandaHavaMelumatinGoster(data);
    })
    .catch((err) => {});

  //?... your logic

  searchInput.value = "";
});

function ekrandaHavaMelumatinGoster(havaMelumati) {
  const newTemp = Math.round(havaMelumati.main.temp);

  const iconUrl = `https://openweathermap.org/img/wn/${havaMelumati.weather[0].icon}.png`;

  movieTitle.innerHTML = `${havaMelumati.name} ${havaMelumati.sys.country}`;
  movieSubTitle.innerHTML = `${newTemp}'C`;
  movieImg.src = iconUrl;
  movieDesc.innerHTML = havaMelumati.weather[0].description;
}

// function a(str) {
//   const myPromise = new Promise(function (res, rej) {
//     if (car.length > 0) {
//       res();
//     } else {
//       rej();
//     }
//   });

//   return myPromise;
// }

// const result = a("url....");

// console.log(result); //? salam5
