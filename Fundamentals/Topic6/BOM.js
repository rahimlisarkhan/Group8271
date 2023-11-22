console.log(window);

// if (window.innerWidth > 900) {
//   alert("");
// }

// console.log(window.screen.width);
// console.log(window.screen.width);

//? file:///Users/rahimlisarkhan/Documents/github/eacamp/Group8271/Fundamentals/Topic6/a.html

// const backBtn = document.querySelector("#backBtn");

// backBtn.addEventListener("click", async function () {
//   window.navigator.geolocation.getCurrentPosition((data) => {
//     console.log("data", data);
//   });

//   //   window.history.back();
//   //   if (window.location.pathname == "about.html") {
//   //     el.style.display = "none";
//   //   } else {
//   //   }
//   //   window.location.reload();
//   //   if (sing) {
//   //     window.location.href = "a.html";
//   //   } else {
//   //     window.location.href = "login.html";
//   //   }
// });

// // console.log(window.history);
// console.log(window.navigator);

// window.addEventListener("online")
// window.addEventListener("mousemove", function (e) {
//   console.log("e", e.screenX);
//   console.log("e", e.screenY);

//   console.log("move");
// });

window.addEventListener("scroll", function (e) {
  console.log("e", e.screenX);
  console.log("e", e.screenY);

  console.log("move");
});

const date = new Date();

console.log(date);
console.log(date.getDay());
console.log(date.getFullYear());
