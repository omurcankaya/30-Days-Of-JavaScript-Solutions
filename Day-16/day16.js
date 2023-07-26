const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Exercises 1 

// 1.1
let stringifySkills = JSON.stringify(skills);
console.log(stringifySkills);

// 1.2
let stringifyAge = JSON.stringify(age);
console.log(stringifyAge);

// 1.3
let stringifyIsMarried = JSON.stringify(isMarried);
console.log(stringifyIsMarried);

// 1.4
let stringifyStudent = JSON.stringify(student);
console.log(stringifyStudent);

// Exercise 2

// 2.1
let jsonStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
console.log(jsonStudent);

// Exercise 3

// 3.1
let parsedJson = JSON.parse(txt);
console.log(parsedJson);

// 3.2
let maxSkillPerson = { name: '', countSkill: 0 };
let mostSkill = new Map(Object.entries(JSON.parse(txt)));
mostSkill = mostSkill.forEach((value, key, map) => {
    if (value.skills.length > maxSkillPerson.countSkill) {
        maxSkillPerson.name = key;
        maxSkillPerson.countSkill = value.skills.length;
    }
})
console.log(maxSkillPerson);