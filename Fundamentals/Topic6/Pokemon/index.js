console.log(window);

const oyununQaydasi = ["e", "f", "w"];

function randomElement() {
  const randomIndex = Math.floor(Math.random() * oyununQaydasi.length);
  return oyununQaydasi[randomIndex];
}

function resultGame(u, c) {
  console.log(u);
  console.log(c);

  if (u == "w" && c == "f") {
    console.log("WIN");
  } else if (u == "f" && c == "e") {
    console.log("WIN");
  } else if (u == "e" && c == "w") {
    console.log("WIN");
  } else if (u == c) {
    console.log("DRAW");
  } else {
    console.log("LOSE");
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
