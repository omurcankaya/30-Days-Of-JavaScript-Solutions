const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

// Exercises 1

// 1.1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 1.2
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 1.3  
const [{ name, age, skills, scores }] = users;
console.log(name, age, skills, scores);



// Exercises 2

// 2.1
for ({ name, scores, skills, age } of users) {
    console.log(name, age, skills);
}

// 2.2
for ({ name, skills } of users) {
    if (skills.length < 2) {
        console.log(name, skills);
    }
}

// Exercises 3

// 3.1
for ({ name, capital, population, languages } of countries_data) {
    console.log(name, capital, population, languages);
}

// 3.2
/* I should make these lines to comment line cause it gives me error.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [firstName, skills, [, , jsScore, reactScore]] = student;
console.log(firstName, skills, jsScore, reactScore);
*/

// 3.3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = (studentArray) => {
    const result = []
    for ([firstName2, skills2, scores2] of studentArray) {
        const newStudent = {
            name: firstName2,
            skills: skills2,
            scores: scores2
        }
        result.push(newStudent);
    }
    return result;
};

console.log(convertArrayToObject(students));

// 3.4
const student2 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
};

const newStudent = {...student2};
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');
console.log(newStudent);
