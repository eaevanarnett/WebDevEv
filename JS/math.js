// parseFloat('1.89 light years away');
// returns - 1.89

// parseInt("That was back in 2008");
// returns - NaN

/* use the unary plus '+' operator to convert strings to numbers if desired rather than 'parseInt/Float' methods */

const secPerMin = 60;
const minPerHour = 60;
const hourPerDay = 24; 
const dayPerWeek = 7;
const weekPerYear = 52;
const yearsAlive = 22;

const secondsPerDay = secPerMin * minPerHour * hourPerDay;

console.log(`There are ${secondsPerDay} seconds in a day!`);

const secondsAlive = secondsPerDay * dayPerWeek * weekPerYear * yearsAlive;

console.log(`I've been alive for more than ${secondsAlive} seconds!`);

// The 'Math.random()' method returns a float number between 0 & 1
// Math.floor( Math.random() * 6 ) + 1; [this returns a number between 1 & 6 bc the plus 1 ]
// Math.ceil( Math.random() * 6 ) [ This still leaves an oppurtunity for the .random() algorithm to render an exact zero ]

const dieRoll = Math.floor( Math.random() * 6 ) + 1;
console.log(`You rolled a ${dieRoll}`);

const result = document.querySelector('main');

const inputLow = prompt( "Enter your lowest number choice" );
const inputHigh = prompt( "Enter your highest number choice" );

// a value other than a number returns 'NaN' which is always false
// the value '0' is considered falsy in JS; state the condition in your if statement
const lowNum = parseInt( inputLow );
const highNum = parseInt( inputHigh );

/* 
 if ( isNan(lowNum) || isNan(highNum) ) {...} 
     also a viable option
*/
if ( lowNum >= 0 && highNum ) {
    const myNum = Math.floor( Math.random() * (highNum - lowNum + 1) ) + lowNum;
    result.innerHTML = `${myNum} is my number between ${lowNum} & ${highNum}`;
} else {
    result.innerHTML = `Sorry ${inputLow} & ${inputHigh} are invalid values, reload the page if you would like to try again.`;
}