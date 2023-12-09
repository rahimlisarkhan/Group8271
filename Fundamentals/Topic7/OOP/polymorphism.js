// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method to make a sound
  makeSound() {
    console.log(`${this.name} makes a generic sound`);
  }
}

// Child class 1
class Dog extends Animal {
  // Method overriding
  makeSound() {
    console.log(`${this.name} barks`);
  }
}

// Child class 2
class Cat extends Animal {
  // Method overriding
  makeSound() {
    console.log(`${this.name} meows`);
  }
}

// Function to demonstrate polymorphism
function animalSounds(animal) {
  animal.makeSound();
}

// Creating instances of different classes
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

// Using the function with different objects
animalSounds(genericAnimal); // Output: Generic Animal makes a generic sound
animalSounds(myDog); // Output: Buddy barks
animalSounds(myCat); // Output: Whiskers meows
