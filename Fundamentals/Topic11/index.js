//? REST API
//? Firebase API | SDK

//? https://blog.az/meqale

// const form = {
//   title: "Bla bla bla",
//   body: "Lorem ipsum",
// };

//? CREATE | POST
//? READ | GET
//? UPDATE | PUT
//? DELETE | DELETE

//? CRUD

async function getPosts() {
  const response = await fetch("https://blog-api-t6u0.onrender.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("data:", data);
}

async function getPostID(id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `https://blog-api-t6u0.onrender.com/posts/${id}`,
    options
  );

  const data = await response.json();

  console.log("data:", data);
}

async function createPost(form) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };

  const response = await fetch(
    `https://blog-api-t6u0.onrender.com/posts`,
    options
  );

  const data = await response.json();

  console.log("data:", data);
}

async function uptPost(id, form) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };

  const response = await fetch(
    `https://blog-api-t6u0.onrender.com/posts/${id}`,
    options
  );

  const data = await response.json();

  console.log("data:", data);
}

async function rmvPost(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `https://blog-api-t6u0.onrender.com/posts/${id}`,
    options
  );

  const data = await response.json();

  console.log("data:", data);
}

getPosts();
//? getPostID(20);
//? createPost({ title: "Lorem", body: "Ipsum" });

// uptPost(55, { title: "Lorem", body: "Ipsum" });

// rmvPost(42);

// const stringOlmusJson = '{ title: "Lorem", body: "Ipsum" }'
