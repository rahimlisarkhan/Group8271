// const personal = ["John", 33, true, [1, 2], function () {}];

// const persona2 = ["Marry", 33, false];

//? JSON - JS Object National
// const movie = {
//   age: 33,
//   isMarried: true,
//   bornIn: 1985,
//   fullname: "John",
//   signInJobYears: [2000, 2003, 2008],
//   "position-job": "Developer",
//   currentCity: {
//     name: "Toronto",
//     lat: 20.3434343,
//     lng: 40.3434343,
//     country: "Canada",
//     address: {
//       name: "Test6",
//     },
//   },
//   actors: [
//     {
//       name: "Test1",
//     },
//     {
//       name: "Test2",
//     },
//   ],
// };

// console.log(movie.currentCity.name);
// // console.log(movie.currentCity["name"]);
// console.log("movie", movie.actors[1].name);

// console.log(student.currentCity.address.name);

// const city = student.currentCity.name;

// console.log(student.actors[0].name);

// console.log(window.location.protocol);

// console.log(student.fullname);
// console.log(student.fullname);
// console.log(student["bornIn"]);
// console.log(student["position-job"]);

// console.log(personal[0]);

const car = {
  marka: "BMW",
  model: "X6",
  year: 2006,
  speed: 0,

  start: function (s = 0) {
    // console.log(this);

    this.speed += 10;

    console.log("start", this.speed);

    // console.log("Start", s);
    // console.log("Start", s);
  },

  monitor: function () {
    console.log(`Marka: ${this.marka}, Model: ${this.model}`);
  },

  stop: function () {
    this.speed -= 10;

    console.log("start", this.speed);
    console.log("Stop");
  },
};

car.start();
car.start();

car.stop();

car.monitor();

console.log(car);

// const date = new Date()

// date.

// Math.max(5, 44);

// el.innerHtml = myobj.city.address.name
// el2.innerHtml = myobj.position
