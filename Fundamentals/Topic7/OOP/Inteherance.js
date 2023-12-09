// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class constructor using super
    super(name);

    this.breed = breed;
  }

  // Additional method
  bark() {
    console.log(`${this.name} barks`);
  }
}

// Child class inheriting from Animal
class Cat extends Animal {
  constructor(name, color) {
    // Call the parent class constructor using super
    super(name);

    this.color = color;
  }

  // Additional method
  meow() {
    console.log(`${this.name} meows`);
  }
}

// Creating instances of child classes
const myCat = new Cat("Whiskers", "Gray");
// const myCat = new Cat("Gray", "Whiskers");

const myDog = new Dog("Buddy", "Golden Retriever");

// console.log("myDog:", myDog);

// myDog.eat();
// myDog.bark();

// Using methods from both parent and child classes
// myDog.eat(); // Output: Buddy is eating
// myDog.bark(); // Output: Buddy barks

myCat.eat(); // Output: Whiskers is eating
myCat.meow(); // Output: Whiskers meows
