// var a = 10;

// var d = 200;

// function B() {
//   return a + 20;
// }

// function C() {

//   return d + 50;
// }

// console.log(B());
// console.log(C());

function saygac() {
  let num1 = 0;

  function icerideHesablayan(par1 = 0) {
    num1 = num1 + par1;

    return num1;
  }

  return icerideHesablayan;
}

const johnCalc = saygac();

console.log(johnCalc(5)); //? 2
console.log(johnCalc(2)); //? 4
console.log(johnCalc(3)); //? 6
console.log(johnCalc(4)); //? 8

const marryCalc = saygac();

console.log(marryCalc()); //? 2
console.log(marryCalc()); //? 4
