// Exercise 3
const generateColor = () => {
    let result = '#'
    for (let i = 0; i < 6; i++) {
        const hexCodes = '0123456789abcdef';
        result += hexCodes.charAt(Math.floor(Math.random() * (hexCodes.length + 1)));
    }
    return result;
}
setInterval(() => {
    document.getElementById('year').style.color = generateColor();
}, 1000);

document.querySelectorAll('li').forEach(item => {
    if (item.textContent.toLowerCase().includes('done')) {
        item.style.backgroundColor = 'green';
    } else if (item.textContent.toLowerCase().includes('ongoing')) {
        item.style.backgroundColor = 'yellow';
    } else {
        item.style.backgroundColor = 'red';
    }
})
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const timeHTML = document.getElementById('time');
setInterval(() => {
    const now = new Date();
    timeHTML.textContent = `${monthNames[now.getMonth()]}
                            ${now.getDay().toString().padStart(2,'0')},
                            ${now.getFullYear()} ${now.getHours().toString().padStart(2,'0')}:
                            ${now.getMinutes().toString().padStart(2,'0')}:
                            ${now.getSeconds().toString().padStart(2,'0')}`;
    timeHTML.style.backgroundColor = generateColor();
}, 1000);