// Exercise 1

// 1.1
const myInfos = {
    firstName: 'ömürcan',
    lastName: 'kaya',
    age: 21,
    country: 'Türkiye',
    city: 'Istanbul'
};
localStorage.setItem('myinfos', JSON.stringify(myInfos));
console.log(JSON.parse(localStorage.getItem('myinfos')));
localStorage.clear();
// Exercise 2

// 2.1
const student = {
    firstName: 'Ömürcan',
    lastName: 'Kaya',
    age: 21,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'Türkiye'
};

localStorage.setItem('student', JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem('student')));
localStorage.clear();

/*
Exercise 3 is not about localStorage & sessionStorage but if you wonder how to solve it
Check day 8 or day 15
*/