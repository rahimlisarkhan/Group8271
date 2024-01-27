// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  child,
  set,
  get,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "librarybookapp-70006.firebaseapp.com",
  apiKey: "AIzaSyAolcFSEN8FdDW9U2DPWkcAAGbiKbSvDNQ",
  storageBucket: "librarybookapp-70006.appspot.com",
  messagingSenderId: "777501714548",
  projectId: "librarybookapp-70006",
  appId: "1:777501714548:web:dc3a91cac16a1031fac921",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();

//?----------------

function writeSetData(collection, data) {
  try {
    if (!collection) {
      alert("Required collection!");
      return;
    }

    const colRef = ref(db, collection);
    set(colRef, data);
  } catch (err) {
    console.log("err", err);
  }
}

function writePushData(collection, data) {
  try {
    if (!collection) {
      alert("Required collection!");
      return;
    }

    const colRef = ref(db, collection);
    push(colRef, data);
  } catch (err) {
    console.log("err", err);
  }
}

async function getData(col) {
  try {
    const dbRef = ref(db);

    const res = await get(child(dbRef, col));

    if (res.exists()) {
      const data = res.val();

      return data;
    } else {
      console.log("No data available");
    }
  } catch (err) {
    console.log("err", err);
  }
}

function uptData(id, col, data) {
  const dataRef = ref(db, col + "/" + id);

  update(dataRef, data);
}

function rmvData(id, col) {
  const dataRef = ref(db, col + "/" + id);

  remove(dataRef);
}

onValue(ref(db, "books"), renderBooks);
//?----------------

document.querySelector("button").addEventListener("click", function () {
  const form = {
    author: "Xalid Huseyn",
    name: "Cerpeleng ucuran ",
    desc: "Lorem ipsum",
    image_url: "djdashjs",
  };
  writePushData("books", form);
});

// function readData(col, callback) {
//   const dataRef = ref(db, col);

//   onValue(dataRef, (snapshot) => {

//     const data = snapshot.val();
//     callback(data);

//   });
// }

// const form = {
//   name: "Test5",
//   desc: "Lorem ipsum",
//   image_url: "djdashjs",
// };

// const book1 = {
//   author: "Xalid Huseyn",
//   name: "Cerpeleng ucuran ",
//   desc: "Lorem ipsum",
//   image_url: "djdashjs",
// };

function convertData(d) {
  const newData = Object.entries(d);

  const myNewData = newData.map((kicikArr) => {
    const newObj = {
      id: kicikArr[0],
      ...kicikArr[1],
    };

    return newObj;
  });

  return myNewData;
}

//? 1.Melumati yazan writePushData("books", book1);

//? 2.Unique yazan writeSetData("aboutus", form);
function renderBooks(snaphot) {
  const data = convertData(snaphot.val());

  console.log("data", data);
}
// function renderContact() {}

// getData("books");

const updateform = {
  id: "-NpAeu4ouC0dKaMsTut-",
  author: "Dan Brown23",
  desc: "Lorem ipsum ip",
  image_url: "djdashjs",
  name: "Angel ",
};

// uptData("-NpAeu4ouC0dKaMsTut-", "books", updateform);

rmvData("-NpAeu4ouC0dKaMsTut-", "books");

// readData("books", renderBooks);
// readData("contacts", renderContact);

// const myDataBase = {
//   contact: {
//     user1: 382832178,
//   },
//   books: {
//     Madasd221: {
//       name: "Dan Brown",
//     },
//     Madasd221: {
//       name: "Dan Brown",
//     },
//   },

//   about_store: {
//     image_url: "",
//   },

//   join: {
//     asjdhsajdhjas: {
//       email: "ddaas",
//       fullname: "dasdadsa",
//     },
//     asjdhsajdhjsdsas: {
//       email: "dsdssdsds",
//       fullname: "dasdadsa",
//     },
//   },
// };

// const obj = {
//   id: "-NpAf6qzzPWARN26v3q5",
//   author: "Dan Brown",
//   desc: "Lorem ipsum",
//   image_url: "djdashjs",
//   name: "Angel ",
// };

// const boyukArr = [["-NpAf6qzzPWARN26v3q5",{}],[],[] ]
