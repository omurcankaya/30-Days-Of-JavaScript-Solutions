// Exercise 1

// 1.1
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries);

// 1.2
const countries_data = [
    {
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": [
            "Pashto",
            "Uzbek",
            "Turkmen"
        ],
        "population": 40218234,
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "region": "Asia",
        "area": 652230
    },
    {
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "languages": [
            "Swedish"
        ],
        "population": 28875,
        "flag": "https://flagcdn.com/ax.svg",
        "region": "Europe",
        "area": 1580
    }
];
console.table(countries_data);

// 1.3
console.group('Errors');
console.error('Error 1');
console.error('Error 2');
console.error('Error 3');
console.groupEnd();

// Exercise 2

// 2.1
console.assert(10 > 2 * 10, '10 > 2 * 10 is not true');

// 2.2
console.warn('HEY, YOU! I am warning you!');

// 2.3
console.error('It is your mistake!');

// Exercise 3

// 3.1
console.time('While took');
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.timeEnd('While took');

console.time('For took');
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd('For took');

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.time('For of took');
for (item of items) {
    console.log(item);
}
console.timeEnd('For of took');

console.time('forEach took');
items.forEach((item) => console.log(item));
console.timeEnd('forEach took');

