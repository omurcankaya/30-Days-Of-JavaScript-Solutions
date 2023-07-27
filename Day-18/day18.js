const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercise 1

// 1.1
fetch(countriesAPI)
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Exercise 2

// 2.1
const getCats = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
    data.forEach(val => {
        console.log(val.name);
    });
};
//getCats(catsAPI);

// Exercise 3

// 3.1
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const maxAndMin = []
        data.forEach(cat => {
            let maxWeight = cat.weight.metric.match(/(\d) \- (\d)/i)[1];
            let minWeight = cat.weight.metric.match(/(\d) \- (\d)/i)[2];

            maxAndMin.push({ min: minWeight, max: maxWeight })
        });
        let avgMax = (maxAndMin.reduce((acc, cur) => acc + (+cur.min), 0)) / maxAndMin.length;
        let avgMin = (maxAndMin.reduce((acc, cur) => acc + (+cur.max), 0)) / maxAndMin.length;
        console.log(`(${avgMin.toFixed(2)} - ${avgMax.toFixed(2)})`)

    })
    .catch(err => console.error(err));

// 3.2
const findLargestCountries = async (api, length) => {
    const response = await fetch(api);
    const data = await response.json();
    const result = data.sort((a, b) => b.population - a.population).splice(0, length);
    console.log(result);
}

findLargestCountries(countriesAPI, 10);

// 3.3
const findLanguages = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    const result = new Set();
    data.forEach(country => country.languages.forEach(language => result.add(language.name)))

    console.log(`There are ${result.size} different languages!`);
}
findLanguages(countriesAPI);