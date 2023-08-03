const checkPrimaryNumber = (number) => {
    let result = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result = false;
            break;
        }
    }
    return result && number>=2;
}
const divContainer = document.getElementsByClassName('container');
const getNumber = document.getElementById('number');
const generateButton = document.getElementById('generateNumbers');

generateButton.addEventListener('click', () => { 
    divContainer[0].innerHTML = ' ';
    for (let i = 1; i <= getNumber.value; i++) {
        let item = document.createElement('div');
        item.className = 'item';
        item.textContent = i.toString();
        item.style.fontSize = '25px';
        item.setAttribute('style','display: flex; justify-content: space-evenly; border-radius: 10px margin: 15px;'); 
        if (i % 2 === 0) {
            item.style.backgroundColor = 'green';
        } else {
            item.style.backgroundColor = 'yellow';
        }
        if(checkPrimaryNumber(i)){
            item.style.backgroundColor = 'red';
        }
        divContainer[0].append(item);
    }
})
