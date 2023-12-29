// https://112.21.121:443
// https://school.eacampschool.com/course/view.php?id=7&section=8
// https://kontakt.az/telefon/iphone

// https://school.eacampschool.com/course/view.php?id=7&section=8

const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");

const movieImg = document.querySelector("#movieImg");
const movieTitle = document.querySelector("#movieTitle");
const movieSubTitle = document.querySelector("#movieSubTitle");
const movieDesc = document.querySelector("#mDesceImg");

// const myPromise = fetch("https://www.omdbapi.com/?apikey=a407a7b3&s=titanic");

// myPromise
//   .then((res) => {
//     const secondPromise = res.json();
//     return secondPromise;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   })
//   .finally(() => {
//     console.log("fetched.");
//   });

searchBtn.addEventListener("click", function () {
  const title = searchInput.value;

  movieImg.src =
    "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952ds27g15ecf7zozwjyyeufs2496pou04v6tih6gs8&ep=v1_gifs_search&rid=200w.gif&ct=g";

  console.log("title", title);

  const myPromise = fetch(
    `https://www.omdbapi.com/?apikey=a407a7b3&t=${title}`
  );

  myPromise
    .then((res) => {
      const secondPromise = res.json();
      return secondPromise;
    })
    .then((movieObj) => {
      console.log(movieObj);

      movieImg.src = movieObj.Poster;
      movieTitle.innerHTML = `${movieObj.Title} ${movieObj.Released}`;
      movieSubTitle.innerHTML = movieObj.Actors;
      movieDesc.innerHTML = movieObj.Awards;
    })
    .catch((err) => {
      console.log("err", err);
    })
    .finally(() => {
      console.log("fetched.");
    });

  //?... your logic

  searchInput.value = "";
});
