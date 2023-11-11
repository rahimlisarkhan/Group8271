const todoBtn = document.querySelector("#todoBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

let data = [];

todoBtn.addEventListener("click", function () {
  console.log("click btn...");
  let value = todoInput.value;
  //   const value = todoInput.getAttribute("value")

  todoInput.value = "";

  data.push(value);

  console.log(data);

  //?render items

  const newListContent = data
    .reverse()
    .map(function (item, index, list) {
      return `<li class="list-group-item">${item}</li>`;
    })
    .join("");

  console.log(newListContent);

  todoList.innerHTML = newListContent;
});
