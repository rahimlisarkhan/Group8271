"use strict";

// try {
//   a = 5;

//   console.log("a", a);
// } catch (err) {
//   console.log(err);
//   alert(err);
// }

async function getBatteryLevel() {
  try {
    const data = await navigator.getBattery();

    console.log(data);
    // el.innerHTML = data.level * 100
  } catch (err) {
    console.log(err);
  }
}

getBatteryLevel();

const a = navigator.geolocation.getCurrentPosition(function (a) {
  console.log("a", a);
});

console.log("a", a);
