// Abstract class
class Animal {
  // name = ""

  constructor(name, age) {
    // if (this.constructor === Animal) {
    //   throw new Error("Cannot instantiate abstract class");
    // }

    this.name = name;
    this.age = age;
  }

  // Abstract method
  makeSound() {
    console.log("Sound....");

    // throw new Error("Abstract method 'makeSound' must be implemented");
  }

  // Concrete method
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Concrete class extending the abstract class
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks`);
  }
}

// Concrete class extending the abstract class
class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} meows`);
  }
}

// Using the classes

const myDog = new Dog("Buddy", 7);

// myDog.makeSound();
// myDog.eat();

// console.log("myDog", myDog);

const myCat = new Cat("Whiskers", 5);

// myDog.makeSound(); // Output: Buddy barks
// myDog.eat(); // Output: Buddy is eating

myCat.makeSound(); //? Output: Whiskers meows
// myCat.eat(); // Output: Whiskers is eating
