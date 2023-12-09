const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const showBtn = document.querySelector("#showBtn");
const moneyInput = document.querySelector("#moneyInput");

const balanceEl = document.querySelector("#balanceEl");
const listTable = document.querySelector("#list");

// let balance = 0;

// function artir(m) {
//   balance += m;
// }

// function xercle(m) {
//   balance -= m;
// }

// function show() {
//   console.log(balance);
// }

class BankAcount {
  balance = 0;
  limit = 0;
  hesabat = [];
  date = new Date();

  constructor(verBalance = 0, verLimit = 0) {
    this.balance = verBalance;
    this.limit = verLimit;
  }

  artir(m) {
    if (this.balance >= this.limit || m <= 0 || !m) {
      console.log("Invalid");
      return;
    }

    this.balance += m;

    const history = {
      type: "Cash",
      amount: m,
      created: this.date,
    };

    this.hesabat.push(history);

    return this.balance;
  }

  xercle(m) {
    const checkValid = () => {
      if (this.balance <= 0) {
        console.log("invalid balance");
        return;
      }

      this.balance -= m;

      const history = {
        type: "Withdraw",
        amount: m,
        created: this.date,
      };

      this.hesabat.push(history);
    };

    checkValid();

    return this.balance;
  }

  show(m) {
    const thisObj = this;

    function handleMonitor() {
      console.log(thisObj.balance);
      console.log(thisObj.hesabat);
    }

    handleMonitor();

    return this.balance;
  }
}

const bankAcount = new BankAcount(100, 2000);

const bankAcount2 = new BankAcount(10, 10000);

//  {
//   balance: 0,
//   limit: 1000,
//   hesabat: [],
//   date: new Date(),

//   artir: function (m) {
//     if (this.balance >= this.limit || m <= 0 || !m) {
//       console.log("Invalid");
//       return;
//     }

//     this.balance += m;

//     const history = {
//       type: "Cash",
//       amount: m,
//       created: this.date,
//     };

//     this.hesabat.push(history);

//     return this.balance;
//   },

//   xercle: function (m) {
//     const checkValid = () => {
//       if (this.balance <= 0) {
//         console.log("invalid balance");
//         return;
//       }

//       this.balance -= m;

//       const history = {
//         type: "Withdraw",
//         amount: m,
//         created: this.date,
//       };

//       this.hesabat.push(history);
//     };

//     checkValid();

//     return this.balance;
//   },

//   show: function (m) {
//     const thisObj = this;

//     function handleMonitor() {
//       console.log(thisObj.balance);
//       console.log(thisObj.hesabat);
//     }

//     handleMonitor();

//     return this.balance;
//   },
// };

incrementBtn.addEventListener("click", function () {
  const value = moneyInput.value;

  bankAcount.artir(+value);

  moneyInput.value = "";
});

decrementBtn.addEventListener("click", function () {
  const value = moneyInput.value;
  bankAcount.xercle(+value);
  moneyInput.value = "";
});

showBtn.addEventListener("click", function () {
  const result = bankAcount.show();

  //   balanceEl.innerHTML = bankAcount.balance;
  balanceEl.innerHTML = result;

  const newContent = bankAcount.hesabat
    .map(
      (item, index) => `
  <tr>
  <th scope="row">${index + 1}</th>
  <td>${item.type}</td>
  <td class="text-${item.type == "Cash" ? "success" : "danger"}">${
        item.type == "Cash" ? "+" + item.amount : "-" + item.amount
      }</td>
  <td>12.11.2023</td>
</tr>
  `
    )
    .join("");

  listTable.innerHTML = newContent;
});

// const a = 5;

// let result = a == 5 ? "Salam" : "Sagol";

// // if (a == 5) {
// //   result = "Salam";
// // } else {
// //   result = "Sagol";
// // }

// console.log(result);
