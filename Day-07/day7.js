// Exercise 1

function fullName() {
    console.log('Ömürcan Kaya');
}

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function addNumbers(num1, num2) {
    return num1 + num2; // You can use a variable to store sum of numbers.
}

function rectangleOfArea(length, width) {
    return length * width;
}

function perimeterOfArea(length, width) {
    return 2 * length * width;
}

function volumeOfArea(length, width, height) {
    return length * width * height;
}

function areaOfCircle(r) {
    return Math.PI * r * r; // or you can use r**2 -> it means r square 
}

function circumOfCircle(r) {
    return 2 * Math.PI * r;
}

function calcDensity(mass, volume) {
    return mass / volume;
}

function calcSpeed(distance, time) {
    return distance / time;
}

function calcWeight(mass, gravity) {
    return mass * gravity;
}

function convertCelsiusToFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}

function calculateBmi(weight, height) {
    const bmi = weight / (height * height);
    switch (true) {
        case bmi < 18.5:
            console.log('Underweight');
            break;
        case bmi < 24.9:
            console.log('Normal weight');
            break;
        case bmi < 30:
            console.log('Overweight');
            break;
        case bmi > 30:
            console.log('Obese');
            break;
        default:
            console.log('BMI is wrong!');

    }
}
function checkSeason(month) {
    month = month.toLowerCase(); // to make it case insensitive
    switch (month) {
        case 'december':
        case 'january':
        case 'jebruary':
            console.log('It is Winter!');
            break;
        case 'march':
        case 'april':
        case 'may':
            console.log('It is Autumn!');
            break;
        case 'june':
        case 'july':
        case 'august':
            console.log('It is Summer!');
            break;
        case 'September':
        case 'October':
        case 'November':
            console.log('It is Spring!');
            break;
        default:
            console.log('It seems not a month');

    }
}

function findMax(num1, num2, num3) {
    let biggestNum = num1;
    if (num2 > biggestNum) {
        biggestNum = num2;
    } if (num3 > biggestNum) {
        biggestNum = num3;
    }
    return biggestNum;
}

// Exercise 2

function showDateTime() {
    const now = new Date()
    return `${now.getDate().toString().padStart(2, 0)}/${now.getMonth().toString().padStart(2, 0)}/${now.getFullYear()} ${now.getHours().toString().padStart(2, 0)}:${now.getMinutes().toString().padStart(2, 0)}`;
}

function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return `x => ${x} y=> ${y}`;
}


function reverseArray(array) {
    const resultArray = []
    for (item of array) {
        resultArray.unshift(item);
    }
    return resultArray;
}

function capitalizeArray(array) {
    array[0] = array[0].toUpperCase();
    return array;
}

function addItem(item) {
    const array = [];
    array.push(item);
    return array;
}

function evensAndOdds(number) {
    let evens = 0,
        odds = 0;
    for (let i = 0; i <= number; i++) {
        i % 2 === 0 ? evens += 1 : odds += 1;
    }
    console.log(`The number of odds are ${odds}.\nThe number of evens are ${evens}.`)
}

function sumOfArguments(){
    let sum=0;
    for(item of arguments){
        sum+=item;
    }
    return sum;
}

function shuffleArray(array){
    for(let i = 0;i<array.length;i++){

        let randomIndex = Math.floor(Math.random()*array.length)
        let temp = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = temp;
    }
    return array;
}

function factorial(number){
    if(number===1){
        return 1;
    }
    return number*factorial(number-1);
}