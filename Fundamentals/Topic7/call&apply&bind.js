//? CALL APPLY & BIND

const obj1 = {
  fullname: "John",
  age: 34,

  hesablayan: function () {
    console.log(this.fullname);
  },
};

const obj2 = {
  age: 24,
  fullname: "Marry",
};

function foo(num, num2) {
  console.log("num", num, num2);

  console.log(this.age + num); //? NAN
}

// foo(100, 102);
// foo.call(obj2, 101, 102);
// foo.call(obj1, 101, 102);
// foo.apply(obj1, [101, 102]);

const foo2 = foo.bind(obj1, 101, 102);
foo2();

// obj1.hesablayan();
// obj1.hesablayan.call(obj2);
