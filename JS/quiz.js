// variable to store correct answers, when quiz begins there are no correct answers
// declare a number here so it doesn't store as a string
let correct = 0;
// variable to store the rank of a player
let rank;
// select the <main> element with queryselector
// this creates an object that now can access properties & methods
const main = document.querySelector("main");

// ask 5 questions, store answer in variable, keep track of correct answers
const answer1 = prompt("Name a programming language that's also a gem.");
if ( answer1.toUpperCase() === 'RUBY' ) {
    correct += 1;
}
const answer2 = prompt("Name a programming language that's also a snake.");
if ( answer2.toUpperCase() === 'PYTHON' ) {
    correct += 1;
}

const answer3 = prompt("What language is used to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
    correct += 1;
}

const answer4 = prompt("What language is used to build the structure of a web page?");
if ( answer4.toUpperCase() === 'HTML' ) {
    correct += 1;
}

const answer5 = prompt("What programming language is used to to make web pages dynamic?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
    correct += 1;
}

if ( correct === 5 ) {
    rank = '<h1>Gold&#128293;</h1>';
} else if ( correct >= 3 ) {
    rank = 'Silver:)';
} else if ( correct >= 1 ) {
    rank = 'Bronze:(';
} else {
    rank = 'None';
}

// calling our object then accessing a property
main.innerHTML = `
    <h2>You got ${correct} out of 5 questions correct!</h2>
    <p>Crown earned: <strong>${rank}</strong></p>
`;