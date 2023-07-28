// Exercise 1

// 1.1
function increasement(initialValue = 0) {
    let value = initialValue;
    function increase() {
        return ++value;
    }
    return increase;
}

const increase = increasement() // default 0
console.log(increase());

// Exercise 2

// 2.1
function math(initialValue = 0) {
    let value = initialValue;

    function increase(increaseValue = 1) {
        value += increaseValue;
        return value;
    }
    function decrease(decreaseValue = 1) {
        value -= decreaseValue;
        return value;
    }
    function divide(divisorValue) {
        value /= divisorValue;
        return value;
    }

    return {
        increase,
        decrease,
        divide
    }
}

const mathLab = math(6);
console.log(mathLab.increase());
console.log(mathLab.increase());
console.log(mathLab.increase());
console.log(mathLab.decrease());
console.log(mathLab.divide(2));

// Exercise 3

// 3.1
function personAcoount() {
    const firstName = 'Ömürcan';
    const lastName = 'Kaya'
    const incomes = [];
    const expenses = [];

    function totalIncome() {
        const result = incomes.reduce((acc, currentIncome) => acc + currentIncome.value, 0);
        return result;
    }
    function totalExpense() {
        const result = expenses.reduce((acc, currentExpense) => acc + currentExpense.value, 0);
        return result;
    }
    function addIncome(value, description) {
        const income = { value, description };
        incomes.push(income);
    }
    function addExpense(value, description) {
        const expense = { value, description };
        expenses.push(expense);
    }
    function accountInfo() {
        console.log(`${firstName} ${lastName}, welcome back!`)
    }
    function accountBalance() {
        console.log(`Your account balance is ${totalIncome() - totalExpense()}`)
    }

    return {
        totalIncome,
        totalExpense,
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    }
}

const person = personAcoount();
person.addExpense(100,'Dornitory Fee');
person.addExpense(50,'Tavuk Doner');
person.addIncome(1250, 'Grant Fee');
person.addIncome(150,'pocket money');
person.accountInfo();
person.accountBalance();
console.log(person.totalIncome());
console.log(person.totalExpense());