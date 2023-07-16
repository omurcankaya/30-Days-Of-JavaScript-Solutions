const dog = {};

console.log(dog);

dog.name = 'Badi';
dog.legs = 4;
dog.color = "White";
dog.age = 1;
dog.bark = function () {
    console.log("woof woof");
};

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let count = 0;
for (user of Object.keys(users)) {
    if (users[user].points >= 50) {
        count += 1;
    }
}
console.log(`${count} users have 50 point or greater.`);

for (user of Object.keys(users)) {
    if (users[user].skills.includes('MongoDB') &&
        users[user].skills.includes('React') &&
        users[user].skills.includes('Express') &&
        users[user].skills.includes('Node')) {
        console.log(user);
    }
}

for ([key, value] of Object.entries(users)) {
    for ([secondKey, value] of Object.entries(users[key])) {
        console.log(`${secondKey}: ${value}`)
    }
}

const countries = {
    Turkey: {
        capital: 'Ankara',
        lanuages: ['Turkish', 'Kurdish'],
        populations: 1
    },
    Azerbaijan: {
        capital: 'Bakü',
        lanuages: ['Azerbaijani'],
        populations: 1
    }
}

for ([key, value] of Object.entries(countries)) {
    for ([secondKey, value] of Object.entries(countries[key])) {
        console.log(`Country name: ${key} -> ${secondKey}: ${value}`);
    }
}


const personAccount = {
    firstName: 'Ömürcan',
    lastName: 'Kaya',
    incomes: [10, 20, 30, 40, 50],
    expenses: [1, 2, 3, 4, 5, 5],
    totalIncomes: function () {
        let totalIncomes = 0;
        for (income of this.incomes) {
            totalIncomes += income;
        }
        return totalIncomes;
    },
    totalExpenses: function () {
        let totalExpenses = 0;
        for (expense of this.expenses) {
            totalExpenses += expense
        }
        return totalExpenses;
    },
    accountInfo: function () {
        console.log(`Hi ${this.firstName}, You have ${this.incomes.length} incomes and ${this.expenses.length} expenses.`);
    },
    addIncome: function (income) {
        this.incomes.push(income);
    },
    addExpense: function (expense) {
        this.expenses.push(expense);
    },
    accountBalance: function () {
        console.log(`You have total ${this.totalIncomes() - this.totalExpenses()}, Your total expenses are ${this.totalExpenses()} and your total incomes are ${this.totalIncomes()}`);
    }
};

personAccount.accountBalance();
personAccount.accountInfo();

// Exercise 3
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

const authMethods = {
    login: function (username, password) {
        for (let i = 0; i < users2.length; i++) {
            if (users2[i].username === username && users2[i].password === password) {
                console.log(`${users2[i].username} welcome back!`)
                users2[i].isLoggedIn = true;
                myActiveUserId = users2[i]._id;
                break;
            }
        }
    },
    register: function (username, password) {
        let isExists = false;
        for (let i = 0; i < users2.length; i++) {
            if (users2[i].username === username) {
                console.log('This username already exists!')
                let isExists = true;
                break;
            }
        }
        if (!isExists) {
            const newUser = {
                _id: 'abcdef',
                username: username,
                email: `${username}@${username}.com`,
                password: password,
                createdAt: '08/01/2023 10:00 AM',
                isLoggedIn: false
            }
            users2.push(newUser);
        }
    }
}

const reactionMethods = {
    likePost: function (productId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i]._id === productId) {
                if(products[i].likes.includes(myActiveUserId)){
                    products[i].likes.splice(products[i].likes.indexOf(myActiveUserId),1)
                    console.log('like removed');
                }else{
                    products[i].likes.push(myActiveUserId);
                }

                break;
            }
        }

    },
    ratePost: function (productId, rate) {
        for (let i = 0; i < products.length; i++) {
            if (products[i]._id === productId) {
                const newRate = {
                    userId: myActiveUserId,
                    rate: rate
                };
                products[i].ratings.push(newRate);
                break;
            }
        }
    },
    averageRating: function (productId) {
        for (let i = 0; i < products.length; i++) {
            if (products[i]._id === productId) {
                let averageRating =0;
                for(let j=0;j<products[i].ratings.length;j++){
                    averageRating+=products[i].ratings[j].rate;
                }
                return averageRating/products[i].ratings.length;
            }
        }
    }
}

//authentication methods

authMethods.login('Alex', '123123');
authMethods.register('ömür', '12');
authMethods.login('ömür', '12');

//REACTIONS

reactionMethods.likePost('eedfcf');// add like
reactionMethods.ratePost('eedfcf', 5);
console.log(products[0].likes); // show who is liked
console.log(products[0].ratings); // show who is rated
console.log(reactionMethods.averageRating('eedfcf')); // calculate average rating
reactionMethods.likePost('eedfcf'); // like removal