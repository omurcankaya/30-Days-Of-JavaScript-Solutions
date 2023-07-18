const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
// Exercises 1

// 1.2
const callbackFunc = (element) => {
    console.log(element.length);
};
names.forEach(callbackFunc);

// 1.3
countries2.forEach((element) => {
    console.log(element);
})

// 1.4
names.forEach(element => console.log(element));

// 1.5
numbers.forEach(element => console.log(element));

// 1.6
const newCountries = countries2.map(country => country.toUpperCase());
console.log(newCountries);
console.log(countries2);

// 1.7
const countriesLength = countries2.map(country => country.length);
console.log(countriesLength);

// 1.8
const squareOfNumbers = numbers.map(number => number ** 2);
console.log(squareOfNumbers);

// 1.9
const namesUpper = names.map(name => {
    return name.toUpperCase()
});
console.log(namesUpper);

// 1.10
const productPrices = products.map(product => product.price);
console.log(productPrices);

// 1.11
const withoutLand = countries2.filter(element => !element.match(/land/gi));
console.log(withoutLand);

// 1.12
const noSixChar = countries2.filter(country => country.length == 6);
console.log(noSixChar);

// 1.13
const noSixOrMoreChar = countries2.filter(country => country.length < 6);
console.log(noSixOrMoreChar);

// 1.14 
const noStartWithE = countries2.filter((element) => {
    return !element.startsWith('E');
});
console.log(noStartWithE);

// 1.15
const onlyValues = products.filter(element => typeof element.price !== 'number');
console.log(onlyValues);

// 1.16
function getStringLists(array) {
    const result = array.filter(element => typeof element === 'string');
    return result;
}

// 1.17
console.log(numbers.reduce((acc, current) => acc + current, 0));

// 1.18
const sentence = countries2.reduce((acc, current) => {
    if (countries2.indexOf(current) !== countries2.length - 1) {
        return acc + current + ', ';
    } else {
        return acc + `and ${current} are north European countries`;
    }
}, '');
console.log(sentence);

// 1.19
// some, at least one element need to satify the conditionals to return true
// every, every elements need to satisfy the conditionals to return true

// 1.20
console.log(names.some(name => name.length > 7));

// 1.21
console.log(countries2.every((country) => country.match(/land/gi)));

// 1.22
// find, finding what you want and it returns the value
// findIndex, finding what you want and it return index of the value

// 1.23
console.log(countries2.find((value) => value.length === 6));

// 1.24
console.log(countries2.findIndex((value) => value.length === 6));

// 1.25
console.log(countries2.findIndex((value) => value === 'Norway'));

// 1.26
console.log(countries2.findIndex((value) => value === 'Russia'));

// Exercises 2

// 2.1
let totalPrice = 0;
products.filter((product) => typeof product.price === 'number').map(element => totalPrice += element.price);
console.log(totalPrice);

// 2.2
console.log(products.reduce((acc, curr) => {
    if (typeof curr.price === 'number') {
        return acc + curr.price;
    } else {
        return acc;
    }
}, 0));

// 2.3
const categorizeCountries = (countries, patterns) => {
    return countries.filter(element => patterns.some(pattern => element.endsWith(pattern)))
};
const patterns = ['land', 'key'];
console.log(categorizeCountries(countries, patterns));

// 2.4
function startWithCountry(countries) {
    const letterAndCount = []
    countries.forEach(country => {
        const firstLetter = country.slice(0, 1);
        if (letterAndCount.length === 0) {
            const newLetter = {
                letter: firstLetter,
                count: 1,
                country: country
            };
            letterAndCount.push(newLetter);
        } else {
            if (letterAndCount.some(element => element.letter === firstLetter)) {
                letterAndCount.forEach(element => {
                    if (element.letter === firstLetter) {
                        element.count += 1;
                        element.country = `${element.country}, ${country}`;
                    }
                })
            } else {
                const newLetter = {
                    letter: firstLetter,
                    count: 1,
                    country: country
                };
                letterAndCount.push(newLetter);
            }
        }
    });
    return letterAndCount;
}

console.log(startWithCountry(countries));

// 2.5
const getFirstTenCountries = (countries) => {
    return countries.filter((country) => countries.indexOf(country) < 10);
};
console.log(getFirstTenCountries(countries));

// 2.6
const getLastTenCountries = (countries) => {
    return countries.filter((country) => countries.indexOf(country) > countries.length - 1 - 10);
};
console.log(getLastTenCountries(countries));

// 2.7
const initialLetters = startWithCountry(countries);
let maxIndex = 0;
initialLetters.forEach(element => {
    if (element.count > initialLetters[maxIndex].count) {
        maxIndex = initialLetters.indexOf(element);
    }
});
console.log(initialLetters[maxIndex]);

// Exercises 3