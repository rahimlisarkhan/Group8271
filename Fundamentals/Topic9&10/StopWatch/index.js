const resetBtn = document.querySelector("#reset");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");

const result = document.querySelector("#result");

let seconds = 0;
let intervalIndex;

console.log("intervalIndex", intervalIndex);

resetBtn.addEventListener("click", function () {
  clearInterval(intervalIndex);
  seconds = 0;

  result.innerHTML = convertTime(seconds);
});

playBtn.addEventListener("click", function () {
  clearInterval(intervalIndex);
  intervalIndex = setInterval(() => {
    seconds++;

    console.log("seconds", seconds);

    result.innerHTML = convertTime(seconds);
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  //? your logic for stop
  clearInterval(intervalIndex);
  console.log("intervalIndex", intervalIndex);
  result.innerHTML = convertTime(seconds);
});

function convertTime(time) {
  //? 134

  const min = Math.floor(time / 60); //? 2
  const qaliqSaniye = time - min * 60;

  const roundMin = min < 10 ? "0" + min : min;
  const roundQaliqSaniye = qaliqSaniye < 10 ? "0" + qaliqSaniye : qaliqSaniye;

  const r = `${roundMin}:${roundQaliqSaniye}`;

  console.log(r);

  return r;
}
