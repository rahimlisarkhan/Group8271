import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { firebaseConfig } from "./config";
import { convertArrayData } from "./index";

import {
  getDatabase,
  ref,
  set,
  push,
  get,
  remove,
  update,
  onValue as onDataValue,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

console.log("firebaseConfig", firebaseConfig);

let app = initializeApp(firebaseConfig);

const database = getDatabase(app);

onDataValue(ref(database, "users"), getPersonals);
//   get(ref(database, "users")).then((snaphot) => {
//     console.log("data", snaphot.val());
//   });

function removePersonal(id) {
  const userRef = ref(database, "users/" + id);

  remove(userRef).then(() => {
    console.log("Success");
  });
}

function uptPersonal(id, data) {
  const userRef = ref(database, "users/" + id);

  update(userRef, data);
}

document.querySelector("#sendBtn").addEventListener("click", function () {
  const fullname = document.querySelector("#fullname").value;
  const age = document.querySelector("#age").value;

  // const id = Date.now();

  const personal = { fullname, age };

  // const userRef = ref(database, "users/"+id);
  const userRef = ref(database, "users");

  // set(userRef, personal);
  push(userRef, personal);
});

function getPersonals(snapshot) {
  if (!snapshot.exists()) {
    console.log("Bele bir budaq yoxdur");

    return;
  }

  const data = convertArrayData(snapshot.val());

  document.querySelector("#list").innerHTML = data
    .map(
      (personal) =>
        `<li class="personalItem" data-value="${personal.id}"">id:${personal.id} | ${personal.fullname}:${personal.age} </li>`
    )
    .join("");
}

//   document
//     .querySelector(".personalItem")
//     .addEventListener("click", function (e) {
//       console.log("e", e);
//     });
//

//   uptPersonal("-NXpjp59hisj2kg1UqmN", { fullname: "Kenan", age: 34 });

$(document).on("click", ".personalItem", function () {
  const itemId = $(this).data().value;

  removePersonal(itemId);
});

import { greet } from "./config";

greet();
// console.log("test");
