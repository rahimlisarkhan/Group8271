type Atype = number | string | boolean;
type Gender = "m" | "f";

type StatusType = 0 | 1;

type StatusOther = 2 | 3 | 4;

// type StatusAll = StatusType | StatusOther
type StatusAll = StatusType & StatusOther;

type GenderImportantType = ["f", "m"];

const f: StatusType = 0;

export type Manager = {
  manager: string;
};

export type User = {
  fullname: string;
  age: null | number;
  gender: Gender;
  status?: StatusType;
};

let a: Atype = 5;
let b: string = "Test";
let c: boolean = false;
let d: number[] = [1, 2, 3];
let e: string[] = ["a", "b", "c"];

let users: User[] = [
  {
    fullname: "Ayaz Ayazov",
    gender: "m",
    age: 24,
  },
  {
    fullname: "Tofiq Khaniyev",
    gender: "m",
    age: 24,
  },
];

let not: undefined = undefined;
let isValid: null | boolean = null;
let gender: GenderImportantType = ["f", "m"];

// gender = ["f","m","a"]

// let personal1: User & Manager = {
//   fullname: "Ayaz Ayazov",
//   gender: "m",
//   age: 24,
//   manager: "s",
// };

let personal1: User = {
  fullname: "Ayaz Ayazov",
  gender: "m",
  age: 24,
};

// users.map((item) => `${item.fullname}`);
