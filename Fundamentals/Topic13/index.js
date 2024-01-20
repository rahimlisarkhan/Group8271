const arr = [1, 2, 3, 4, 5];

const obj = {
  name: "Nezife",
  job: "Developer",
};

// localStorage.setItem("fullname", "Orxan");
// localStorage.clear(); //? Clear edir all

// localStorage.setItem("key2", "active");
// localStorage.setItem("key2", "deactive");
// localStorage.setItem("key5", 5);

// const result10 = parseInt(localStorage.getItem("key5"))

// const fullname = localStorage.getItem("fullname");
// const nomreler = localStorage.getItem("numbers");

// const result = localStorage.getItem("key2");
// console.log("result: ", typeof result);

// if (result == "active") {
//   console.log("daxil oldu");
// }

// const stringArr = "[1,2,3,4]";
// const stringObj = "{name:'Tofiq Ejdaha',age:23}";

// localStorage.setItem("key6", JSON.stringify(obj));

// const result = localStorage.getItem("key6");

// const result2 = JSON.parse(result);

// console.log("result:", result);
// console.log("result2", result2);

// localStorage.removeItem("numbers");

// console.log(localStorage.key(2));

// sessionStorage.setItem("key2", "Aydan");

// const setCookie = (key, value) => {
//   document.cookie = `${key}=${value};`;
// };

// setCookie("job", "developer");

const mycokies = document.cookie;

console.log("mycokies", mycokies.split("; "));
