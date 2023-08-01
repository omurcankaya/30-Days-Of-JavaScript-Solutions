// Exercise 1
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
for (let i = 1; i <= 100; i++) {
    let item = document.createElement('div');
    item.className = 'item';
    item.textContent = i.toString();
    item.style.fontSize = '25px';
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


