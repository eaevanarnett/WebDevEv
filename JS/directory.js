const createDirectory = arr => {
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
    data.insertAdjacentHTML('beforeend', html);
}

createDirectory( pets );
// insertAdjacentHTML(<string of where inside '<element/selector>' I am inserting HTML>, <actual HTML string>)
