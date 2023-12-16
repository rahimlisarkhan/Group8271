//? 1.
function countdown(n) {
  if (n < 1) {
    return false;
  } else {
    console.log(n);
    countdown(n - 1);
  }
}

countdown(0);

// // Example usage
// countdown(5);

// //? 2.
const jsonData = {
  id: 1,
  name: "Parent",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        {
          id: 4,
          name: "Child 1.1",
          children: [],
        },
        {
          id: 5,
          name: "Child 1.2",
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: "Child 2",
      children: [],
    },
  ],
};

// jsonData.children.map()

function traverseJson(data) {
  console.log(`ID: ${data.id}, Name: ${data.name}`);
  // el.appendchild(data.name);

  if (data.children && data.children.length > 0) {
    for (let i = 0; i < data.children.length; i++) {
      traverseJson(data.children[i]);
    }
  }
}

// // Example usage
traverseJson(jsonData);

//? 3

// const arr = ["a", "b", "c", "d", "f"];
// const data = [];

// function countdown(n) {
//   if (n == arr.length) {
//     //? arayin uzunlugu qeder sayir.en son uzunluga catdisa dayanir
//     return false;

//   } else {
//     console.log(arr[n]);

//     //?...Your logic//
//     if (arr[n] % 2 == 0) {
//       data.push(arr[n]);
//     }

//     const forParam = n + 1; //?

//     // return countdown(forParam);
//     countdown(forParam);
//   }
// }

// countdown(0);
