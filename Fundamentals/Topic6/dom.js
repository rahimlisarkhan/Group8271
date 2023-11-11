//? 1.Finding--------
// var btnEl = document.URL;
// var btnEl = document.getElementById("buttonElement");
// var btnEl = document.getElementsByClassName("btn")

// const btnEl = document.querySelector("#buttonElement");
// const btnEl = document.querySelector(".buttonElement");
// const el = document.querySelector("h1 .text");
// const el = document.querySelector("#buttonElement");

// el.innerText = "SAgol Sefa";

//? 2.Change--------
// el.innerText = "create";
// el.innerText = "<span> create </span>";
// el.innerHTML = "<span> create </span>";

// el.style.color = "red";
// el.style.backgroundColor = "yellow";
// const result = el.getAttribute("class");
// el.setAttribute("class", "btn btn-danger");

// console.log(result);

// console.log(el.id);

//? Adding and Deleting Elements

// let h5El = document.createElement("h5");
// h5El.innerText = "Lorem";
// h5El.setAttribute("class", "title");

// let divEl = document.createElement("div");

// divEl.appendChild(h5El);

// // document.body.appendChild(divEl);

// console.log(divEl);

// const inputTag = texttitle.nextSibling;

// divel.innerHTML = "<h5 class='title'>Lorem</h5>";

const el = document.querySelector("#buttonElement");
const titleEl = document.getElementById("textTitle");

console.log("titleEl", titleEl);

el.addEventListener("click", function () {
  console.log("click btn...");

  if (titleEl.classList.contains("showContent") == true) {
    titleEl.classList.remove("showContent");
  } else {
    titleEl.classList.add("showContent");
  }

  //   titleEl.innerText = "Ugurla gonderildi!";
  //   titleEl.style.color = "green";
  //   titleEl.style.fontSize = "50px";
});
