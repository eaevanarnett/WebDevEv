const data = document.querySelector('.column');

let html = '';

for ( let i = 0; i < pets.length; i++ ) {
    let pet = pets[i];
    html += `
        <h2>${pet.name}</h2>
        <h3>${pet.type} | ${pet.breed}</h3>
        <p> Age: ${pet.age}</p>
        <img src='${pet.photo}' alt='${pet.breed}'>
    `;
}

// .column also referred to as node in DOM
// insertAdjacentHTML(<string of where inside 'main' I am inserting HTML>, <actual HTML string>)
data.insertAdjacentHTML('beforeend', html);
