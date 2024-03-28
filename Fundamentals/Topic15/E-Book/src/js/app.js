import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsaP3ZfOSiY6a5zefV4On8AH_AfspOh0w",
  authDomain: "cleverapp-ae7d7.firebaseapp.com",
  projectId: "cleverapp-ae7d7",
  storageBucket: "cleverapp-ae7d7.appspot.com",
  messagingSenderId: "503438416447",
  appId: "1:503438416447:web:246894a3d927bf0022b68a",
  measurementId: "G-3E90Y3J40C",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

// CRUD functions

// Create
const createData = (path, data) => {
  const newRef = push(ref(database, path), data);
  //   set(newRef, data);x/
  return newRef.key;
};

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

// Read
const readData = (path) => {
  console.log(".....");

  const dataRef = ref(database, path);
  return get(dataRef).then((snapshot) => snapshot.val());
};

// Update
const updateData = (path, data) => {
  return update(ref(database, path), data);
};

// Delete
const deleteData = (path) => {
  return remove(ref(database, path));
};

const optons = {
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
};

const swiper = new Swiper(".swiper", optons);

const bookTitle = document.querySelector("#bookTitle");
const bookDesc = document.querySelector("#bookDesc");
const bookUrl = document.querySelector("#bookUrl");
const bookAuthor = document.querySelector("#bookAuthor");
const bookCrtBtn = document.querySelector("#bookCrtBtn");
const booksSection = document.querySelector("#booksSection");

// const currentBook = {}

const isHomePage = window.location.pathname.includes("index.html");

console.log("isHomePage", isHomePage);

if (isHomePage) {
  readData("/books")
    .then((data) => {
      const books = convertData(data);
      renderBooks(books);
    })
    .catch((error) => console.error("Error reading data:", error));
}

bookCrtBtn?.addEventListener("click", function (e) {
  e.preventDefault();

  const title = bookTitle.value;
  const description = bookDesc.value;
  const image_url = bookUrl.value;
  const author = bookAuthor.value;

  const form = {
    title,
    description,
    image_url,
    author,
  };

  createData("books", form);
  alert("Added book");
  console.log("form", form);
});

function renderBooks(list) {
  booksSection.innerHTML = list
    .map(
      (book) =>
        `
        <div class="card position-relative" style="width: 18rem">
        <img
          src="${book.image_url}"
          class="card-img-top object-fit-cover"
          height="300"
          alt="${book.title}"
        />
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
          <p class="card-text">
           ${book.description.slice(0, 20)} ...
          </p>
     
        </div>

        <div class="text-danger h2 position-absolute top-0 end-0">
          <i class="far fa-heart"></i>
        </div>
      </div>
        `
    )
    .join("");
}
