const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Exercise 1

// 1.1
const emptySet = new Set();

// 1.2
const zeroToTenSet = new Set();
for (let i = 0; i <= 10; i++) {
    zeroToTenSet.add(i);
}
console.log(zeroToTenSet);

// 1.3
zeroToTenSet.delete(10);
console.log(zeroToTenSet);

// 1.4
zeroToTenSet.clear();
console.log(zeroToTenSet);

// 1.5
const array = ['Slm', 'mrb', 'nbr', 'iyi', 'sen']
const stringSet = new Set(array);
console.log(stringSet);

// 1.6
const countriesAndCount = new Map();
countries.forEach((element) => countriesAndCount.set(element, element.length));
console.log(countriesAndCount);

// Exercise 2

// 2.1
const unionSet = new Set([...a, ...b]);
console.log(unionSet);

// 2.2
const B = new Set(b);
console.log(a.filter((number) => B.has(number)));

// 2.3
// I was not able to understand

// Exercise 3

// 3.1
const howManyLanguages = new Set();
countries_data.forEach((country) => country.languages.forEach((language) => howManyLanguages.add(language)));
console.log(howManyLanguages.size);

// 3.2
const mostSpokenLanguages = (countries, length) => {
    const countriesSet = new Set();
    const result = [];
    const allLang = [];
    countries.forEach((country) => country.languages.forEach((language) => allLang.push(language)));
    for (let language of howManyLanguages) {
        const lang = allLang.filter((lang) => language === lang);
        const newItem = { [`${language}`]: lang.length }
        result.push(newItem);
    }
    return result.sort((a, b) => b[Object.keys(b)] - a[Object.keys(a)]).splice(0, length);
};

console.log(mostSpokenLanguages(countries_data, 5))