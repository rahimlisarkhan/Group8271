let otp = document.querySelector("#otp");

let s = 60;

function A() {
  s--;
  // const date = new xDate();
  console.log("Hello", s);

  otp.innerHTML = `Bu ${s} saniyeden sonra tekrar gonderin`;
}

// A();

// let wait1 = setTimeout(A, 2000);
let wait1 = setInterval(A, 1000);
// let wait2 = setTimeout(A, 3000);

document.querySelector("button").addEventListener("click", function () {
  // clearTimeout(wait1);
  clearInterval(wait1);
});

// console.log(wait1);
// console.log(wait2);
// console.log("Merhaba");
