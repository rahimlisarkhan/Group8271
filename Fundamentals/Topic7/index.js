// const myObj = {
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
//   news_link: ["link1", "link2", "link3"],
//   poster: null,

//   wife: {
//     name: "Marry",
//     surname: "Doe",
//     "position-job": "Developer",
//     10: 1999,
//   },
// };

// console.log(myObj.wife.name);
// console.log(myObj.wife["name"]);
// // console.log(myObj.wife["position-job"]);

// console.log(myObj.wife[10]); //? 1999
// console.log(myObj.news_link[2]);

const cardList = document.querySelector("#cardList");

const data = [
  {
    age: 33,
    isMarried: true,
    bornIn: 1985,
    fullname: "John",
    signInJobYears: [2000, 2003, 2008],
    "position-job": "Developer",
    currentCity: {
      name: "Toronto",
      lat: 20.3434343,
      lng: 40.3434343,
      country: "Canada",
      address: {
        name: "Test6",
      },
    },
    actors: [
      {
        name: "Test1",
      },
      {
        name: "Test2",
      },
    ],
    news_link: ["link1", "link2", "link3"],
    poster: null,

    wife: {
      name: "Marry",
      surname: "Doe",
      "position-job": "Developer",
      10: 1999,
    },
  },
  {
    age: 33,
    isMarried: true,
    bornIn: 1985,
    fullname: "Marry",
    signInJobYears: [2000, 2003, 2008],
    "position-job": "Developer",
    currentCity: {
      name: "Toronto",
      lat: 20.3434343,
      lng: 40.3434343,
      country: "Canada",
      address: {
        name: "Test6",
      },
    },
    actors: [
      {
        name: "Test1",
      },
      {
        name: "Test2",
      },
    ],
    news_link: ["link1", "link2", "link3"],
    poster: null,

    wife: {
      name: "Marry",
      surname: "Doe",
      "position-job": "Developer",
      10: 1999,
    },
  },
  {
    age: 33,
    isMarried: true,
    bornIn: 1985,
    fullname: "Anar",
    signInJobYears: [2000, 2003, 2008],
    "position-job": "Developer",
    currentCity: {
      name: "Toronto",
      lat: 20.3434343,
      lng: 40.3434343,
      country: "Canada",
      address: {
        name: "Test6",
      },
    },
    actors: [
      {
        name: "Test1",
      },
      {
        name: "Test2",
      },
    ],
    news_link: ["link1", "link2", "link3"],
    poster: null,

    wife: {
      name: "Marry",
      surname: "Doe",
      "position-job": "Developer",
      10: 1999,
    },
  },
  {
    age: 33,
    isMarried: true,
    bornIn: 1985,
    fullname: "Sevinc",
    signInJobYears: [2000, 2003, 2008],
    "position-job": "Developer",
    currentCity: {
      name: "Toronto",
      lat: 20.3434343,
      lng: 40.3434343,
      country: "Canada",
      address: {
        name: "Test6",
      },
    },
    actors: [
      {
        name: "Test1",
      },
      {
        name: "Test2",
      },
    ],
    news_link: ["link1", "link2", "link3"],
    poster: null,

    wife: {
      name: "Marry",
      surname: "Doe",
      "position-job": "Developer",
      10: 1999,
    },
  },
  {
    age: 33,
    isMarried: true,
    bornIn: 1985,
    fullname: "Cingiz",
    signInJobYears: [2000, 2003, 2008],
    "position-job": "Developer",
    currentCity: {
      name: "Toronto",
      lat: 20.3434343,
      lng: 40.3434343,
      country: "Canada",
      address: {
        name: "Test6",
      },
    },
    actors: [
      {
        name: "Test1",
      },
      {
        name: "Test2",
      },
    ],
    news_link: ["link1", "link2", "link3"],
    poster: null,

    wife: {
      name: "Marry",
      surname: "Doe",
      "position-job": "Developer",
      10: 1999,
    },
  },
];

const newContentData = data
  .map((item) => {
    console.log("item:", item);
    return `
  <div class="card">
  <img
    width="200"
    class="img-fluid"
    src="${item.img}"
    alt=""
  />
  <div class="card-body">
    <h5 class="card-title">${item.fullname}</h5>
    <p class="card-text">${item.currentCity.name}</p>
  </div>
</div>
  `;
  })
  .join("");

// console.log("newContentData", newContentData);

cardList.innerHTML = newContentData;

// const numbers = [1, 4, 5, 6, 7];

// const newList = ["<li>1</li>", "<li>4</li>", "<li>5</li>"].join();

for (let person of data) {
  console.log("-----------");
  console.log(person.fullname);

  // console.log("Fullname:", person.fullname);
  // console.log("Age:", person.age);
  // console.log("Live:", person.currentCity.name);
  console.log("-----------");
}

console.log(cardList);

// const list = [34, 54, 657, "string", { name: "John" }];

// list[3].toLowerCase();
