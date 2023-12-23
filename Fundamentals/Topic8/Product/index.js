const response = new Promise(function (res, rej) {
  const cars = [
    { marka: "Toyota", model: "Camry", price: 25000, year: 2022 },
    { marka: "Honda", model: "Civic", price: 22000, year: 2021 },
    { marka: "Ford", model: "Mustang", price: 45000, year: 2023 },
    // Add more cars as needed
  ];

  setTimeout(function () {
    if (cars.length !== 0) {
      res({ success: 200, message: "OK", data: cars });
    } else {
      rej({ success: 500, message: "ERROR", data: null });
    }
  }, 3000);
});

response.then(renderItems).catch((err) => {
  console.log("err:", err);
});

function renderItems(data) {
  const cars = data.data;

  const listEl = document.querySelector("#list");

  listEl.innerHTML = cars
    .map(
      (item) => `
  <div class="card" style="width: 18rem">
  <img
    class="p-4"
    src="data:image/png;base64,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"
  />
  <div class="card-body">
    <h5 class="card-title">${item.marka} ${item.model}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
    <p class="card-text">
      ${item.year}
    </p>
    b5
  </div>
</div>
  `
    )
    .join("");

  console.log(cars);
}

//? Real Backend or Real Server

const myPromise2 = fetch(
  "http://www.omdbapi.com/?apikey=a407a7b3&s=movie&limit=20"
);

myPromise2
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movies = data.Search;

    console.log("movies", movies);
  })
  .catch((err) => {
    console.log("err:", err);
  });

console.log("myPromise2", myPromise2);

// function fetch("url"){
//     //?.....

//     const promise = new Promise(function(){})

//     return promise
// }
