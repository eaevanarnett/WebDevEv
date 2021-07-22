const name = {
    first: "Jack"
};

const role = {
    title: "programmer"
};

const individual = {
    ...name,
    ...role
};

// Using '...' spread operator to merge 2 objects into a new one - 'individual'
console.log( individual );



const person = {
    first: 'Evan',
    age: 22,
    height: '70in',
    weight: '180lb',
    race: 'white',
    futureProgrammer: true,
    skills: ['HTML', 'CSS', 'Javascript']
};

person.last = 'Arnett'
person.skills[2] = 'Python';

// Utilized the '.join()' here to combine array with a comma & space
const message = `Hi I'm ${person.first} ${person.last} and I'm learning ${person.skills[2]}. I have ${person.skills.length} skills: ${person.skills.join(", ")}.`;
console.log( message );

// with for-in loops, you must use '[]' to access property values
for ( let propertyName in person ) {
    // This statement accesses the 'key'
    console.log( `${propertyName}:` );
    // This statement dynamically accesses the VALUES of the [propertyName]
    console.log( person[propertyName] );
}



// Utilizing the Object.keys/values(<objectName>) to create an ARRAY of data stored in declared variable
const prop = Object.keys(person);
console.log(prop);

const propValue = Object.values(person);
console.log(propValue);

// .length property to return the amount of keys; cannot be used on an object literal 'person.length', will return 'undefined'
console.log( Object.keys(person).length );





// creating an array OF objects
const questions = [
    {
        question: "How many planets are in our solar system?",
        answer: "8"
    },
    {
        question: "How many continents are there?",
        answer: "7"
    },
    {
        question: "What year was Javascript created?",
        answer: "1995"
    }
];

const correct = [];
const incorrect = [];
let correctAnswers = 0;

for ( let i = 0; i < questions.length; i++ ) {
    // two sets of 'square brackets to access element in NESTED ARRAY
    let question = questions[i][0]; // '.question' is viable option rather than [0]
    let answer = questions[i][1]; // '.answer' is viable option rather than [1]
    let response = prompt(question);

    if ( response === answer ) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        incorrect.push(question);
    }
}
