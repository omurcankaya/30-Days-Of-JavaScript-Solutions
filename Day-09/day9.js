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
    const letterAndCount = [{
        letter: 'A',
        count: 0
    }];
    countries.forEach(country => {
        const firstLetter = country.slice(0, 1);
        if (letterAndCount.some(element => element.letter === firstLetter)) {
            letterAndCount.forEach(element => {
                if (element.letter === firstLetter) {
                    element.count += 1;
                }
            })
        } else {
            const newLetter = {
                letter: firstLetter,
                count: 1,
            };
            letterAndCount.push(newLetter);
        }
    }
    );
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

// 3.1

// Name sort 
console.log(countries_data.sort());
// Capital Sort
const sorted = countries_data.filter(element => typeof element['capital'] === 'string').sort((a, b) => a['capital'].localeCompare(b['capital']));
console.log(sorted.concat(countries_data.filter((element) => typeof element['capital'] !== 'string')));
// Population Sort
console.log(countries_data.sort((a, b) => a['population'] - b['population']));

// 3.2
const languagesListAndCount = [{
    language: 'English',
    count: 0
}];
const mostSpokenLanguages = (countries, length) => {
    countries.filter((country) => typeof country.languages === 'object').forEach((country) => {
        country.languages.forEach((language) => {
            if (languagesListAndCount.some((languageAndCount) => languageAndCount.language === language)) {
                languagesListAndCount[languagesListAndCount.findIndex((element) => language === element.language)].count += 1;
            } else {
                const newLanguage = {
                    language: language,
                    count: 1
                };
                languagesListAndCount.push(newLanguage);

            }
        })
    })
    languagesListAndCount.sort((a, b) => b.count - a.count);
    return languagesListAndCount.filter(element => languagesListAndCount.indexOf(element) < length);
}

console.log(mostSpokenLanguages(countries_data, 5));

// 3.3

function mostPopulationCountry(countries, length) {
    const sorted = countries.sort((a, b) => b.population - a.population).map((item) => {

        return { country: item.name, population: item.population };
    });
    return sorted.filter(item => sorted.indexOf(item) < length);
}
console.log(mostPopulationCountry(countries_data, 5));

// 3.4

const statistics = {
    ages: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
    count: () => {
        return statistics.ages.length;
    },
    sum: () => {
        return statistics.ages.reduce((acc, curr) => acc + curr);
    },
    min: () => {
        const sorted = statistics.ages.sort((a, b) => a - b);
        return sorted[0]
    },
    max: () => {
        const sorted = statistics.ages.sort((a, b) => b - a);
        return sorted[0]
    },
    range: () => {
        return (statistics.max() - statistics.min());
    },
    median: () => {
        const sorted = statistics.ages.sort((a, b) => a - b);
        if (statistics.count % 2 === 0) {
            return (sorted[sorted.length / 2] + sorted[sorted.length / 2 + 1]) / 2;
        } else {
            return sorted[Math.floor(sorted.length / 2)];
        }
    },
    mean: () => {
        return statistics.sum() / statistics.count();
    },
    mode: () => {
        const modObject = [{
            age: statistics.ages[0],
            count: 0
        }];
        statistics.ages.forEach((age) => {
            if (modObject.some((modItem) => modItem.age === age)) {
                modObject[modObject.findIndex((modItem) => modItem.age === age)].count += 1;
            } else {
                const newModItem = {
                    age: age,
                    count: 1
                };
                modObject.push(newModItem);
            }
        });


        const sorted = modObject.sort((a, b) => b.count - a.count);
        return sorted[0];
    },
    var: () => {
        let total = 0;
        statistics.ages.forEach(age => {
            total += (statistics.mean() - age) ** 2
        })

        total = total / (statistics.count());
        return total;
    },
    std: () => {
        return (statistics.var() ** (1 / 2));
    },
    freqDist: () => {
        const modObject = [{
            age: statistics.ages[0],
            count: 0
        }];
        statistics.ages.forEach((age) => {
            if (modObject.some((modItem) => modItem.age === age)) {
                modObject[modObject.findIndex((modItem) => modItem.age === age)].count += 1;
            } else {
                const newModItem = {
                    age: age,
                    count: 1
                };
                modObject.push(newModItem);
            }
        });
        const arrFreqDist=[];
        modObject.forEach((modItem) => {
            console.log(modItem);
            const newFreq = {
                percent: 100*modItem.count / statistics.count(),
                age: modItem.age
            };
            arrFreqDist.push(newFreq);
        });
        return arrFreqDist.sort((a,b)=>b.percent-a.percent);
    }
};

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