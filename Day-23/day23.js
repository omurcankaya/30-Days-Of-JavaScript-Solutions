// Exercise 1

// 1.1
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
    if(!isNaN(getNumber.value)){
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
    }else{
        divContainer[0].innerHTML = ' ';
        let warningP = document.createElement('p');
        warningP.id = 'warning';
        warningP.textContent = 'It is not a number!'
        warningP.style.fontSize = '25px';
        warningP.style.color = 'red';
        document.body.append(warningP);
        setTimeout(() => {
            const selectOldPressedKey = document.getElementById('warning');
            selectOldPressedKey.remove()
        }, 3000);
    }
})


// 1.2
document.body.addEventListener('keypress', (event) =>{
    if(document.getElementById('pressed-key')){
        const selectOldPressedKey = document.getElementById('pressed-key');
        selectOldPressedKey.remove()
    }
    let pressedKey = document.createElement('p');
    pressedKey.id = 'pressed-key';
    pressedKey.textContent = `You Pressed ${String.fromCharCode(event.keyCode)}`;
    pressedKey.style.fontSize = '30px';
    document.body.append(pressedKey);
    
})