const arr = [20, 30, 40, 50];
const arr2 = [];

const newArr = arr.map((item, index, list) => {
  //   const result = item * 10;
  const result = `<p> ${item}</p>`;
  return result;
});

const newArrWithForEach = arr.forEach((item, index, list) => {
  const result = item * 10;
  return result;
  // arr2.push(result)
});

console.log("newArr:", newArr);
console.log("newArrWithForEach:", newArrWithForEach);
