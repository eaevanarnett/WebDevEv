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


const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];

const search = prompt('Search for a product.');
let productIndex;
let message;

if ( search ) {
    search = search.toLowerCase();
    productIndex = inStock.indexOf(search);
}

if ( !search ) {
    message = "Sorry please enter a valid item.";   
} else if ( productIndex !== -1) {
    message = `${search} are in stock! It's is item #${productIndex + 1} on the list:) `;
} else {
    message = `Sorry ${search} is not in stock. Check in next week. `;
}

message += `<h3>In Stock:</h3> <p>${inStock.join(", ")}.</p>`;

document.querySelector('main').innerHTML = `<p>${message}</p>`;