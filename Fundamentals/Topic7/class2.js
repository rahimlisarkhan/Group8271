// class MyObjResept {
//   fullname = null;
//   age = null;
//   job = null;

//   constructor(f, a, j) {
//     this.fullname = f;
//     this.age = a;
//     this.job = j;
//   }
// }

// function A() {}

// const myObj1 = new MyObjResept("John", 22, "Designer");
// const myObj2 = new MyObjResept("Marry", 24, "Mobile Dev");
// const myObj3 = new MyObjResept("Tom", 32, "Front Dev");

// console.log("myOb1", myObj1);
// console.log("myObj2", myObj2);
// console.log("myObj3", myObj3);

// // console.log(MyObjResept);
// // console.log(A);

// // const obj1 = {
// //   fullname: "John",
// //   age: 22,
// // };

//? OOP

//? 1. Abctract ( Yaratdigimiz class props ve methodlardan ibaret olmasidir)
//? Interance (Miras alma)
//? Encapsulation (private, public, protected)
//? Polmarism

//? ----- Abctract -------
class Animal {
  bornIn = null;
  name = "";
  type = null;
  voice = null;
  age;

  constructor(verName, verType, verVoice, verAg) {
    this.name = verName;
    this.type = verType;
    this.voice = verVoice;
    this.age = verAg;
  }

  voice() {
    console.log("Voice:", this.voice);
  }
}

//? ----- Interance -------
class ZooParkAnimal extends Animal {
  deadline = null;

  constructor(n, t, v, ag, dead) {
    // super("Sir", "quru", "Voov", 34);
    // super(n, t, v, ag);
    super(n, t, null, ag);
    // super();

    this.deadline = dead;

    // this.name = n;
    // this.type = t;
    // this.voice = v;
    // this.deadline = d;
  }

  myVoice() {
    super.voice();
  }

  myXercle(num) {
    const a = super.xercle(num);

    console.log(a);
  }
}

const filAnimal = new ZooParkAnimal("Fil", "quru", "fffff", 34, 12400);
// const filAnimal = new ZooParkAnimal();

filAnimal.myVoice();

// const myObj = new Animal("Fil", "quru", "ffff");

// myObj.voice();

const date = new Date();
