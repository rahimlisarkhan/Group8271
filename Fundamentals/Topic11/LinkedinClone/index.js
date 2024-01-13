const postList = document.querySelector("#postList");
const postTitle = document.querySelector("#postTitle");
const postDesc = document.querySelector("#postDesc");
const postBtn = document.querySelector("#postBtn");

let data = [];

//? API'S
async function getPosts() {
  try {
    const response = await fetch("https://blog-api-t6u0.onrender.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("err", err);
  }
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
  try {
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

    return data;
  } catch (err) {
    console.log("err", err);
  }
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

//? GENERAL
function renderElements(data) {
  postList.innerHTML = data
    .map(
      (post) => `
    <div class="card">
    <img
      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      class="card-img-top object-fit-cover"
      height="200"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">
        ${post.body}
      </p>
      <button class="btn btn-danger btn-sm">Delete</button>
    </div>
  </div>
    `
    )
    .join("");
}

postBtn.addEventListener("click", async function () {
  const title = postTitle.value;
  const body = postDesc.value;

  const form = {
    title,
    body,
  };

  const tezePost = await createPost(form);

  data = [tezePost, ...data];

  renderElements(data);
});

async function App() {
  const posts = await getPosts();

  data = posts;

  renderElements(posts);
}

App();
