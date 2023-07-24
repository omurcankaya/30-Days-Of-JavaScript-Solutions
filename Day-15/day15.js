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
        return `Its name is ${this.name}, it is ${this.age} years old, it has got ${this.legs} legs and its color is ${this.color}.`;
    }
}


// 1.2
const dog = new Animal('Lessi', 5, 'white', 4);
console.log(dog);
console.log(dog.getAnimal())

const cat = new Animal('Gaddar', 1, 'orange', 4);
console.log(cat);
console.log(cat.getAnimal())

// Exercise 2

// 2.1
class Mammals extends Animal {
    getAnimal() {
        return super.getAnimal() + 'And Its mammals!';
    }
}

const bat = new Mammals('Batman', 3, 'black', 2);
console.log(bat);
console.log(bat.getAnimal());

// Exercise 3 

// 3.1
class Statistics {
    constructor(array) {
        this.array = array;
    }
    count() {
        return this.array.length;
    }
    sum() {
        return this.array.reduce((acc, age) => acc + age);
    }
    min() {
        return this.array.sort((a, b) => a - b)[0];
    }
    max() {
        return this.array.sort((a, b) => a - b)[this.array.length - 1];
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count()
    }
    median() {
        const sorted = this.array.sort((a, b) => a - b);
        if (this.count() % 2 === 0) {
            return (sorted[sorted.length / 2] + sorted[sorted.length / 2 + 1]) / 2;
        } else {
            return sorted[Math.floor(sorted.length / 2)];
        }
    }
    mode() {
        let result = { mode: 0, count: 0 }
        const setArr = new Set(this.array);
        setArr.forEach((age) => {
            if (this.array.filter((ageFilter) => ageFilter === age).length > result.count) {
                result.mode = age;
                result.count = this.array.filter((ageFilter) => ageFilter === age).length;
            }
        });
        return result;
    }
    var() {
        let total = 0;
        this.array.forEach(age => {
            total += (this.mean() - age) ** 2
        });
        total = total / (this.count());
        return total;
    }
    std() {
        return (this.var() ** (1 / 2));
    }
    freqDist() {
        const result = [];
        const setArr = new Set(this.array);
        setArr.forEach(ageEach => {
            const percent = this.array.filter(age => ageEach === age).length * 100 / this.count();
            result.push(`(${percent.toFixed(1)}, ${ageEach})`);
        })
        return result.sort((a, b) => (+b.match(/\((.+), (.+)\)/)[1]) - (+a.match(/\((.+), (.+)\)/)[1]));
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());

// 3.2
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    totalIncome() {
        return this.incomes.reduce((acc, income) => acc + income.value, 0);
    }
    totalExpense() {
        return this.expenses.reduce((acc, expenses) => acc + expenses.value, 0);
    }
    accountInfo() {
        return `Hi ${this.firstName} ${this.lastName}, your incomes ${this.totalIncome()}, your expenses ${this.totalExpense()}`;
    }
    addIncome(value, description) {
        this.incomes.push({ value: value, description: description });
    }
    addExpense(value, description) {
        this.expenses.push({ value: value, description: description });
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }

}

const omurcan = new PersonAccount('Ömürcan', 'Kaya', [{ value: 1200, description: 'Scholarship' }], [{ value: 500, description: 'Student dornitory' }])

console.log(omurcan);
console.log(omurcan.accountInfo())
console.log(omurcan.accountBalance())

omurcan.addExpense(500, 'Parfume')
omurcan.addIncome(100, 'Intern Salary')
console.log(omurcan.accountInfo())
console.log(omurcan.accountBalance())