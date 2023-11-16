// const buttonElement = document.querySelector("#buttonElement");
// const buttonElement2 = document.querySelector("#buttonElement2");

// buttonElement.addEventListener("click", function () {
//   console.log("click...");
// });

// buttonElement.onclick = function (e) {
//   const leftPosition = e.clientX;
//   const topPosition = e.clientY;

//   const div = document.querySelector("#panel");

//   div.style.top = topPosition + 10 + "px";
//   div.style.left = leftPosition + "px";

//   console.log("click...", e);
// };

// function A(num) {
//   console.log("check...", num);
// }

// buttonElement2.addEventListener("contextmenu", function () {
//   console.log("right click");
// });

// console.log();

// const textTitle = document.querySelector("#textTitle");
// const btnEl = document.querySelector("#buttonElement");

// textTitle.addEventListener("mouseenter", function () {
//   console.log("uzerine geldi");

//   //   btnEl.classList.add("d-none")
//   btnEl.style.display = "none";
// });

// textTitle.addEventListener("mouseleave", function () {
//   console.log("kenara cxdi");
//   //   btnEl.classList.add("d-block")
//   btnEl.style.display = "inline";
// });

const todoInput = document.querySelector("#todoInput");

todoInput.addEventListener("keypress", function (e) {
  //   if(e.key == "Enter")
  if (e.keyCode == 13) {
    console.log("press..: ", todoInput.value);

    // data.push(todoInput.value)
  }
});
