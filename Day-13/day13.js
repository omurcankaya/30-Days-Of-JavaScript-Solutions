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