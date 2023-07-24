// Exercise 1

// 1.1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getAnimal() {
        return `Its name is ${this.name}, it is ${this.age} years old, it has got ${this.legs} legs and its color is ${this.color}`;
    }
}


// 1.2
const dog = new Animal('Lessi', 5, 'white', 4);
console.log(dog);
console.log(dog.getAnimal())

const cat = new Animal('Gaddar', 1,'orange',4);
console.log(cat);
console.log(cat.getAnimal())

// Exercise 2