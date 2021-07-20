/*
It's good to add this to each file to explain what the purpose of your code is. Developers also add copyright notices and authorship details here
*/

// alert("Warning this message is going to self destruct!");
// alert("3...");
// alert("2..");
// alert("1.");
// document.querySelector("h1").innerHTML = "<h1>&#128293;BOOM!&#128293</h1>";
// if <h1> tags weren't desired in the value, you can use 'textContent'
// 'querySelector' is a built in method of the object 'document' which references the current web page

    // const name = prompt("What's your name?");
    // const msg = prompt(`Hi ${name}! Enter a phrase you would like shout`).toUpperCase();
    // const shoutMsg = `Your desired message: <h2>${msg}!!!</h2>`;
    // document.querySelector("h1").innerHTML = shoutMsg;
    // let message = `Hi there, ${name}. Thanks for stopping by ${name}! We hope to see you again by the ${6 * 5}th! `;
    // console.log(message);

// must use backticks for 'template literal' to reference 'const'
// this is known as INTERPOLATION-this insertion of something with a different nature into something else
// interpolation supports multi-line scripts without the use of a backslash & it preserves source code carriage returns

// The game starts with a default 'false' value
let correctGuess = false;
const number = 12;
const guess = prompt("Guess a number between 1 & 20");

// The '+' operator converts a string to NUMBER
if (+guess === number) {
    correctGuess = true;
} else if (+guess === 11 || +guess === 13) {
    console.log("You were so close!")
}

if (correctGuess === true) {
    console.log("You guessed correctly!");
} else {
    console.log(`Sorry! ${guess} is incorrect. The number was ${number}`);
}

const name = prompt("Hi what's your name?")
alert(`Alright ${name} let's play a game!`)
const verb = prompt("Please enter a random verb:");
const adjective = prompt("Random adjective:");
const noun = prompt("Random noun:");

let sentence = `<i>${name} let the ${noun} ${verb} next to the ${adjective} pogo stick all night long.</i>`;

document.querySelector("p").innerHTML = sentence;

/*
if (password === '' || or username === '') {
    alert("Please fill in all the required fields to continue")
}
*/