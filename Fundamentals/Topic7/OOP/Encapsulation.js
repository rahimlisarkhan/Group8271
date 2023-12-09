// class Counter {
//   #count = 0; // Private field

//   #increment() {
//     this.#count++;
//     console.log(`Count: ${this.#count}`);
//   }

//   // Public method
//   getCount() {
//     return this.#count;
//   }

//   // Public method
//   reset() {
//     this.#count = 0;
//     console.log("Counter reset");
//   }

//   // Public method
//   performIncrement() {
//     this.#increment();
//   }
// }

// // Creating an instance of Counter
// const counterInstance = new Counter();

// // Using the public methods
// counterInstance.performIncrement(); // Output: Count: 1
// console.log(counterInstance.getCount()); // Output: 1

// counterInstance.reset(); // Output: Counter reset
// console.log(counterInstance.getCount()); // Output: 0

//? PRIVATE or Public or Protected | GETTER and SETTER

class Bank {
  #hesab_nomresi = null;
  name = "";

  constructor(num, verName) {
    // super(age)

    this.#hesab_nomresi = num;
    this.name = verName;
  }

  #emeliyyat() {
    console.log("Loading...");
  }

  // getHesabNomresi() {
  //   return this.#hesab_nomresi;
  // }

  get bank_nomresi() {
    return this.#hesab_nomresi;
  }

  set bank_nomresi(newNum) {
    if (newNum.length > 8) {
      this.#emeliyyat();
      this.#hesab_nomresi = newNum;
    } else {
      console.log("error...");
    }
  }

  // setHesabnomresi(newNum) {
  //   if (newNum.length > 8) {
  //     this.#emeliyyat();
  //     this.#hesab_nomresi = newNum;
  //   } else {
  //     console.log("error...");
  //   }
  // }

  bark() {
    console.log("bark");
  }

  // setName(n){

  //   if(typeof n =="string" && n.length > 2){
  //     this.name = n
  //   }

  // }
}

const hesab = new Bank("31jnsjd", "Tofiq");

console.log(hesab.bank_nomresi);

hesab.bank_nomresi = "Tofiq21csda123";

// console.log("hesab:", hesab.bank_nomresi());

// hesab.name = "Jale";

// hesab.setHesabnomresi("tofiq11212312");

// hesab.#emeliyyat();

// hesab.#hesab_nomresi = "tofiq";

// console.log(hesab);
