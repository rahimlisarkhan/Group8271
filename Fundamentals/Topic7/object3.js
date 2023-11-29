// const Math = {
//     PI:3.14837218681,

//     random:function(){

//     },

//     round:function(num){

//         return num
//     }
// }

// const Animation = {

//     fade:function(){

//     }
// }

// Animation.fade()

// function A(){

// }

// const h1El = document.querySelector(".h1");

// h1El.style.display = "block";

// const myObj = {
//   fullname: "John Doe",
//   job: "Developer",
// };

// myObj.fullname = "Marry Tea";
// myObj.age = 23;

// delete myObj.job;

// const map1 = new Map();
// map1.set('bar', 'foo');

// console.log(map1.delete('bar'));
// // expected result: true
// // (true indicates successful removal)

// console.log(map1.has('bar'));

// const map = new Map();

// map.set("name", "Ayaz");
// map.delete("job");

// console.log(map);

// myObj = 90;

// console.log(myObj);

// const z = 1000;

// const myObj = {
//   speed: 0,
//   marka: "",
//   z: 200,

//   start: function () {
//     // console.log(myObj.speed);
//     this.speed += 10;

//     const y = this.hesablayan(20);

//     console.log("y", y);

//     console.log(this.speed);

//     this.monitor();
//   },

//   monitor: function () {
//     console.log("Show");
//   },

//   hesablayan: function (n) {
//     // console.log(z);
//     // console.log(this.z);

//     const result = n + 23;

//     return result;
//   },
// };

// myObj.start();

// myObj.start();

// const a = myObj.hesablayan(33);
// const b = Math.round(33.54);

// console.log("a", a);

// const myObj2 = { ...myObj };
// // const myObj2 = myObj;

// myObj2.speed = 100;

// myObj2.start();

// console.log("myObj", myObj);
// console.log("myObj2", myObj2);

// myObj2.speed = 100;

// myObj2.start();

// const secondMyObj = {
//   age: 27,

//   foo: function () {
//     console.log("this:", this);

//     const B = () => {
//       console.log("Test");

//       console.log(" this for B:", this);
//     };

//     B();
//   },

//   foo: function () {
//     console.log("this:", this);

//     const thisObj = this;

//     function B() {
//       console.log("Test");

//       console.log(" this for B:", thisObj.age);
//       //   console.log(" this for B:", this.age);
//     }

//     B();
//   },

// foo: () => {
//   console.log("this:", this);
// },
// };

// secondMyObj.foo();

// console.log(this);

// function myFunction() {
//   console.log(this);
// }
// myFunction();

// var someObj = {
//   fullname: "Red Hat",

//   say: function () {
//     console.log("say:", this);

//     const kenardakiThis = this;

//     function bar() {
//       console.log("bar", kenardakiThis);
//     }

//     bar();
//   },

//   say: function () {
//     console.log("say:", this);

//     const bar = () => {
//       console.log("bar", this);
//     };

//     bar();
//   },
// };

// someObj.say();

// var myObj = {
//   name: "",

//   yell: function () {
//     this.name = "Star Powerup";

//     var changeName = function (newName) {
//       console.log("changeName this", this);

//       this.name = newName;
//     };

//     changeName("Blue Shell");

//     console.log("example", this);
//   },
// };

// myObj.yell();

// var myObj = {
//   name: "",

//   yell: function () {
//     this.name = "Star Powerup";

//     var changeName = (newName) => {
//       console.log("changeName this", this);

//       this.name = newName;
//     };

//     changeName("Blue Shell");

//     console.log("example", this);
//   },
// };

// myObj.yell();

let firstName = "John";
let lastName = "Doe";

// console.log(this.firstName);

var theChosenOne = function () {
  console.log(this.firstName + " " + this.lastName);
};

theChosenOne();
