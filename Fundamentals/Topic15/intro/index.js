export function convertArrayData(obj) {
  const array = Object.entries(obj);
  const newArray = array.map((item) => ({
    id: item[0],
    ...item[1],
  }));

  return newArray;
}

// const momentOBJ = moment([2022, 4, 17]);

// // console.log(momentOBJ.format("ddd, MMM Do YYYY"));
// console.log(momentOBJ.fromNow(true));

// var iseDaxilOlduguZaman = moment([2021, 8, 15]);
// var iseDaxilOlduguZaman = moment([2021, 8, 15]);
// var indikiZaman = moment().add(150, "days");
// // a.diff(b, 'days') // 1
// // var result = iseDaxilOlduguZaman.diff(indikiZaman, "days", true); // 1
// var result = iseDaxilOlduguZaman.diff(indikiZaman, "days"); // 1

// console.log(result);
