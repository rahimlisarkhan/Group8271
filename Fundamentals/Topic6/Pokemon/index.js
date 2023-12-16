console.log(window);

const oyununQaydasi = ["e", "f", "w"];
let player1Point = 0;
let player2Point = 0;

const showPoint1 = document.querySelector("#showPoint1");
const showPoint2 = document.querySelector("#showPoint2");

const showResult1 = document.querySelector("#showResult1");
const showResult2 = document.querySelector("#showResult2");

const showImg1 = document.querySelector("#showImg1");
const showImg2 = document.querySelector("#showImg2");

function randomElement() {
  const randomIndex = Math.floor(Math.random() * oyununQaydasi.length);
  return oyununQaydasi[randomIndex];
}

function resultGame(u, c) {
  console.log(u);
  console.log(c);

  showImg1.src = `./img/${u}.png`;
  showImg2.src = `./img/${c}.png`;

  if (u == "w" && c == "f") {
    console.log("WIN");
    player1Point += 1;

    showPoint1.innerHTML = player1Point;

    showResult1.innerHTML = "WIN";
    showResult2.innerHTML = "LOSE";

    showResult1.style.color = "green";
    showResult2.style.color = "red";

    // showResult1.classList.toggle("text-success");
    // showResult2.classList.toggle("text-danger");
  } else if (u == "f" && c == "e") {
    console.log("WIN");

    player1Point += 1;
    showPoint1.innerHTML = player1Point;
    showResult1.innerHTML = "WIN";
    showResult2.innerHTML = "LOSE";

    showResult1.style.color = "green";
    showResult2.style.color = "red";
    // showResult1.classList.toggle("text-success");
    // showResult2.classList.toggle("text-danger");
  } else if (u == "e" && c == "w") {
    console.log("WIN");
    player1Point += 1;

    showPoint1.innerHTML = player1Point;
    showResult1.innerHTML = "WIN";
    showResult2.innerHTML = "LOSE";

    showResult1.style.color = "green";
    showResult2.style.color = "red";
    // showResult1.classList.toggle("text-success");
    // showResult2.classList.toggle("text-danger");
  } else if (u == c) {
    console.log("DRAW");

    showResult1.innerHTML = "DRAW";
    // showResult1.classList.toggle("text-warning");

    showResult2.innerHTML = "DRAW";
    // showResult2.classList.toggle("text-warning");

    showResult1.style.color = "gray";
    showResult2.style.color = "gray";
  } else {
    console.log("LOSE");
    player2Point += 1;

    showPoint2.innerHTML = player2Point;

    showResult1.style.color = "red";
    showResult2.style.color = "green";

    showResult1.innerHTML = "LOSE";
    // showResult1.classList.add("text-danger");

    showResult2.innerHTML = "WIN";
    // showResult2.classList.add("text-success");
  }
}

window.addEventListener("keypress", function (e) {
  const userChoose = e.key;

  if (oyununQaydasi.indexOf(userChoose) != -1) {
    const compChoose = randomElement();

    resultGame(userChoose, compChoose);
  } else {
    alert("Duzgun herf sec: bunlar olmalidir: e f w");
  }
});

// const tag = {
//   inner: "",
// };

// tag.inner = "Test";

// const arr = [12, 3, 4];

// const fullname = "John Doe";

// // arr.every()

// console.log(typeof arr); //? object

// const result = Math.ceil()

class MMC {}

class AZZA extends MMC {}

class SkalatliTort extends AZZA {}

const hazirTort = new SkalatliTort();

// const firebase = new Firebase()

// const a = firebase.fcm()
