//? Assing
// var a = 5;
// a = 10;

// let b = 5;
// b = 10;

// const c = 3.14;

// c += 100;

// console.log("c", c);

//? Hoisted
// a = 5;

// console.log(a);

// var a;

// b = 5;

// console.log(a);

// let b;

// var let const = function scope
// function A() {
//   var b = 2;
//   //   let b = 2;
//   //   const b = 2;

//   function B() {
//     let z = 10;
//   }

//   B();

//   console.log(z);
// }

// console.log(b);

// A();

if (true) {
  //   var a = 10;
  const a = 10;

  //   alert(a);
}

console.log("a", a);

for (var i = 0; i < 10; i++) {
  // for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("coldeki", i);

// var not block scope
// let const is block scope

//? 1.Ferq -  var global scopedur amma let const deyil
//? 2.Ferq - Var ve Let menimsetmek sonradan olur constda olmur
//? 3.Ferq - Var  Let ve const function scopedur.Cunki kenardan el catmaq olmur
//? 4.Ferq -  Const let block scopdur amma var deyil
