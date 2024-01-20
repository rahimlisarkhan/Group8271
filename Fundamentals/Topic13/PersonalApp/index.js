const menuBtn = document.querySelector("#menuBtn");
const leftSidePanel = document.querySelector("#leftSidePanel");
const crtBtn = document.querySelector("#crtBtn");

const cardList = document.querySelector("#cardList");

const data = JSON.parse(localStorage.getItem("information")) ?? [];

console.log("data", data);

menuBtn.addEventListener("click", function () {
  const isHasClass = leftSidePanel.classList.contains("d-none");

  console.log("test..");

  if (isHasClass) {
    leftSidePanel.classList.remove("d-none");
    localStorage.setItem("menuPanel", "active");
  } else {
    leftSidePanel.classList.add("d-none");
    localStorage.setItem("menuPanel", "deactive");
  }
});

crtBtn.addEventListener("click", function () {
  const formUrl = document.querySelector("#formUrl");
  const formFullname = document.querySelector("#formFullname");
  const formPos = document.querySelector("#formPos");

  const form = {
    url: formUrl.value,
    fullname: formFullname.value,
    position: formPos.value,
  };

  data.push(form);

  localStorage.setItem("information", JSON.stringify(data));

  formUrl.value = "";
  formFullname.value = "";
  formPos.value = "";

  renderInformation();
});

function renderInformation() {
  cardList.innerHTML = data
    .map(
      (item) =>
        `
        <div class="card" style="width: 12rem">
        <img
        src="${item.url}"
          src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${item.fullname}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.position}</h6>
        </div>
      </div>
        `
    )
    .join("");
}

function MyApp() {
  //? your logic....

  renderInformation();

  const menuPanelStatus = localStorage.getItem("menuPanel");

  if (menuPanelStatus == "active") {
    leftSidePanel.classList.remove("d-none");
  } else {
    leftSidePanel.classList.add("d-none");
  }
}

// function signinSite(form) {
//   // For POST
//   // your fetching logic

//   const data = "39898391839128";

//   localStorage.setItem("access_token", data);
// }

// function getMovies() {
//   const apikey = localStorage.getItem("access_token");
//   //? fetching logic url ${apikey}
// }

MyApp();
