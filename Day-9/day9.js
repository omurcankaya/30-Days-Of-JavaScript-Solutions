const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

// 1.2
const callbackFunc = (element) => {
    console.log(element.length);
};
names.forEach(callbackFunc);

// 1.3
countries.forEach((element) => {
    console.log(element);
})

// 1.4
names.forEach(element => console.log(element));

// 1.5
numbers.forEach(element => console.log(element));

// 1.6
const newCountries = countries.map(country => country.toUpperCase());
console.log(newCountries);
console.log(countries);

// 1.7
const countriesLength = countries.map(country => country.length);
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
const withoutLand = countries.filter(element => !element.match(/land/gi));
console.log(withoutLand);

// 1.12
const noSixChar = countries.filter(country => country.length == 6);
console.log(noSixChar);

// 1.13
const noSixOrMoreChar = countries.filter(country => country.length < 6);
console.log(noSixOrMoreChar);

// 1.14 
const noStartWithE = countries.filter((element) => {
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
const sentence = countries.reduce((acc, current) => {
    if (countries.indexOf(current) !== countries.length - 1) {
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
console.log(countries.every((country) => country.match(/land/gi)));

// 1.22
// find, finding what you want and it returns the value
// findIndex, finding what you want and it return index of the value

// 1.23
console.log(countries.find((value) => value.length === 6));

// 1.24
console.log(countries.findIndex((value) => value.length === 6));

// 1.25
console.log(countries.findIndex((value) => value === 'Norway'));

// 1.26
console.log(countries.findIndex((value) => value === 'Russia'));
