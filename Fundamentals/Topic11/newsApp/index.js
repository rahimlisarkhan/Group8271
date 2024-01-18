const API_KEY = "UHjXuuGPzFMGII97B8c5RmJDSomaEELG";

const myModal = new bootstrap.Modal("#exampleModal", {
  keyboard: false,
});

console.log("myModal", myModal);

const renderNews = (arr) => {
  const content = arr
    .map((news) => {
      return `<div class="col-md-12">
                <div class="card mb-5">
                    <img style="height:400px; object-fit: cover;"
                        src="https://www.nytimes.com/${news?.multimedia[0]?.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${news?.abstract}</h5>
                        <p class="card-text">${news?.lead_paragraph}</p>
                    </div>
                    <a href="${news?.web_url}" target="blank" class="btn btn-danger">Read More</a>
                </div>
            </div> `;
    })
    .join("");

  document.querySelector("#newsList").innerHTML = content;
};
const formInfo = () => {
  let sort = document.querySelector("#sortNews").value;
  let end_date = document.querySelector("#endDateNews").value;
  let begin_date = document.querySelector("#startDateNews").value;
  let q = document.querySelector("#titleNews").value;

  let formData = {
    q,
    sort,
    begin_date,
    end_date,
  };

  return formData;
};

document.querySelector("#searchNews").addEventListener("click", async (e) => {
  e.preventDefault();
  let form = formInfo();

  console.log(form, "form");
  const data = await getNews(form);

  myModal.hide();

  renderNews(data.response.docs);
});

// API
const getNews = async (data) => {
  try {
    const { q, end_date, begin_date, sort } = data;

    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${q}&end_date=${end_date}&begin_date=${begin_date}&sort=${sort}`;

    const response = await fetch(URL, {
      method: "GET",
    });

    const info = await response.json();

    return info;
  } catch (err) {
    alert("err", err.responseJSON.errors[0]);
  }
};
