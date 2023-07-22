// Exercises 1 

// 1.1
const quest1 = ' ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const regex = /[0-9]+/g;
console.log(quest1.match(regex).reduce((acc, price) => (+acc) + (+price), 0));

// 1.2
const quest2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
const regex2 = /-?\d+/g;
const sortedArr = quest2.match(regex2).sort((a, b) => b - a);
console.log(sortedArr[0] - sortedArr[sortedArr.length - 1]);

// 1.3
const is_valid_variable = (string) => {
    const result = /^[a-z_]+$/.test(string);
    console.log(result);
    return result;
};
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True

// Exercises 2

// 2.1
function tenMostFrequentWords(paragraph,length=10) {
    const result = [];
    const setWords = new Set(paragraph.match(/\w+/gi));
    setWords.forEach((setWord) => {
        const regex = new RegExp(`\\b${setWord}\\b`,'g');
        result.push({
            word: setWord,
            count: paragraph.match(regex).length
        });
    })
    return result.sort((a, b) => b.count - a.count).splice(0,length);
}
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph,3));

// Exercise 3

// 3.1
const cleanText = (paragraph) =>{
    return paragraph.replace(/[^a-zA-Z ]/g,'')
};
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));

// 3.2
function cleanAndMostFrequent (paragraph){
    return tenMostFrequentWords(cleanText(paragraph), 3);
}
console.log(cleanAndMostFrequent(sentence));