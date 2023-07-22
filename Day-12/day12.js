// Exercises 1 

// 1.1
const quest1 = ' ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const regex = /[0-9]+/g;
console.log(quest1.match(regex).reduce((acc, price) => (+acc) + (+price),0));

// 1.2
const quest2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
const regex2 = /-?\d+/g;
const sortedArr = quest2.match(regex2).sort((a,b) => b-a);
console.log(sortedArr[0]-sortedArr[sortedArr.length-1]);

// 1.3
const is_valid_variable = (string) =>{
    const result = /^[a-z_]+$/.test(string);
    console.log(result);
    return result;
};
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True
