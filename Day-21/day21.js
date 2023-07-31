// Exercise 1

// 1.1
const firstParagraph = document.getElementsByTagName('p')[0];
console.log(firstParagraph);

// 1.2
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');

console.log(p1, p2, p3, p4);

// 1.3
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 1.4
allParagraphs.forEach((item) => console.log(item.textContent));

// 1.5
allParagraphs[3].textContent = "Fourth Paragraph";

// 1.6
const paragraphs = document.querySelectorAll('p');
paragraphs[0].setAttribute('id','firstP');
paragraphs[0].className = 'paragraph';

paragraphs[1].setAttribute('id', 'secondP');
paragraphs[1].classList.add('class','paragraph');

paragraphs[2].id = 'thirdP';
paragraphs[2].classList.add('class','paragraph');

paragraphs[3].id = 'fourthP';
paragraphs[3].setAttribute('class','paragraph');

// Exercise 2