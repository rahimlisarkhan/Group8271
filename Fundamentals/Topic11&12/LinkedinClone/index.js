const postList = document.querySelector("#postList");
const postTitle = document.querySelector("#postTitle");
const postDesc = document.querySelector("#postDesc");
const postBtn = document.querySelector("#postBtn");

const loadingSpinner = document.querySelector("#loadingSpinner");

// let loadingCrtPost = false

let data = [];

//? API'S
async function getPosts() {
  try {
    //? 200-400 Status + JS code
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
  try {
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
  } catch (err) {
    console.log("err", err);
  }
}

async function createPost(form) {
  try {
    // el.style.display = "none";

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
    // el.style.display = "block";
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
  try {
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

    // console.log("data:", data);

    return data;
  } catch (err) {
    console.log("err", err);
  }
}

//? GENERAL
function renderElements(data) {
  postList.innerHTML = data
    .map((post, index) => {
      if (index < 101) return null;

      return `
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
      <button class="btn btn-danger btn-sm" onclick="handleRemoveEl(${post.id})">Delete</button>
    </div>
  </div>
    `;
    })
    .join("");
}

postBtn.addEventListener("click", async function () {
  try {
    // loadingCrtPost = true

    postBtn.setAttribute("disabled", "true");
    loadingSpinner.classList.remove("d-none");
    loadingSpinner.classList.add("d-block");

    const title = postTitle.value;
    const body = postDesc.value;

    if (!title.trim() || !body.trim()) {
      alert("Xanalari duzgun doldurun");
      return;
    }

    const form = {
      title,
      body,
    };

    const tezePost = await createPost(form);

    data = [tezePost, ...data];

    // App() sehf yanasmadi
    renderElements(data);
  } catch (err) {
    console.log("err", err);

    //? oz dom kodlarivi yazib modalivi aktiv edirsen err mesajina gore
  } finally {
    postBtn.removeAttribute("disabled");
    loadingSpinner.classList.add("d-none");
    loadingSpinner.classList.remove("d-block");
  }
});

async function handleRemoveEl(id) {
  try {
    console.log("id", id);

    // const removeEl = await rmvPost(id);
    await rmvPost(id);

    console.log("Ugurla silindi", id);

    data = data.filter((post) => post.id !== id);

    renderElements(data);

    // App();
  } catch (err) {
    console.log("err", err);
  }
}

async function App() {
  const posts = await getPosts();

  data = posts;

  renderElements(posts);
}

App();
