// Exercise 2
const divContainer = document.querySelector('div.container')
for(country of countries){
    let countryItem = document.createElement('div');
    countryItem.className = 'item';
    countryItem.style.borderStyle = 'solid';
    countryItem.textContent = country;
    divContainer.append(countryItem)
}