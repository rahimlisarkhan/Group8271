// const a = Date.now();

// var months = ["Yanvar","Fevral"]

// const monthIndex = date.getMonth();

// const getMonthName = (short) => {
//   const date = new Date();
//   const monthIndex = date.getMonth();

//   var month = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   var shortMonth = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   if (short) {
//     return shortMonth[monthIndex];
//   }

//   return month[monthIndex];
// };

// console.log(getMonthName());

// const result = date.getDate(); ayin gunu
// const result = date.getDay(); // heftenin gunu
// const result = date.getFullYear(); //? 2023
// const result = date.getHours(); //? 19
// const result = date.getMilliseconds(); //? 1 saniye ucun olan ml
// const result = date.getMinutes(); //? min 22
// const result = date.getMonth(); //? index ay ucun 10
// const result = date.getVarDate(); //? index ay ucun 10
// const result = date.getTime(); //? 1970 since mil

// console.log("result: ", result);

// console.log("a", a);

// 1 san = 1000 msan

// 60 = 60000

// 1700752533 = 1700752532534
//          = 1700752533

// 60 60000

const countDayDown = (dateFormat) => {
  const currentDate = new Date();
  const featureDate = new Date(dateFormat);

  // date.setMonth(7);
  // date.setFullYear(2020);
  // date.setFullYear(2024, 3, 30);

  const currentMil = currentDate.getTime();
  const featureMil = featureDate.getTime();

  const diffMil = Math.floor((featureMil - currentMil) / 1000 / 60 / 60 / 24);

  return diffMil;
  // console.log("featureMil:", featureMil);
};

document.querySelector("#dateBtn").addEventListener("click", function () {
  const value = document.querySelector("#dateInput").value;

  const result = countDayDown(value);

  document.querySelector(
    "#showDate"
  ).innerHTML = `Bu tarixe ${result} gun qaldi`;
});

const date = new Date();

document.querySelector("#showTime").innerHTML =
  date.getHours() + ":" + date.getMinutes();

const obj1 = {
  fullname: "John Doe",
  age: 22,

  monitor() {
    console.log("this is", this.fullname + " " + this.age);
  },
};

const obj2 = {
  fullname: "Marry Perry",
  age: 28,
};
