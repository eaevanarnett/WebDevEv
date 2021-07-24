const result = document.querySelector('main');
let decoration = '';
const randomValue = () => Math.floor( Math.random() * 256 );

function randomRGB(value) {
    const color = `rgb( ${value()}, ${value()}, ${value()} )`;
    return color;
}

function getRandomColor( arg ) {
    return `<div style="background-color: ${randomRGB(randomValue)}">${arg}</div>`;
}

for ( let i = 1; i < 11; i++ ) {
    decoration += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

decoration += getRandomColor('Evan');
decoration += getRandomColor('Arnett');
decoration += getRandomColor('Programmer');

result.innerHTML = decoration;