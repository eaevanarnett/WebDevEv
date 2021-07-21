/*
functions are parsed before execution allowing 'calling' anywhere in the script(HOISTING!!!)
-it is recommended not to access global variables from within a function; declare them as local variables if possible( doing this makes the function FULLY reusable even if declaration is redundant )
*/

/*
ANONYMOUS FUNCTION/ FUNCTION EXPRESSION (are not HOISTED, calling must be done after initialization)
const getRandomNum = function(max) {
    const randomNum = Math.floor( Math.random() * max ) + 1;
    return randomNum;
} the initialization is personal preference
*/

/*
function getRandomNum(max) {
    const randomNum = Math.floor( Math.random() * max ) + 1;
    return randomNum;
}
console.log( getRandomNum(6) );
console.log( getRandomNum(25) );
console.log( getRandomNum(100) );

    If a function returns 'undefined', there isn't a specified RETURN value
*/


/**
 * Generates a random number between to specified values
 * 
 * @param {number} lowNum -  input's low number.
 * @param {number} highNum -  input's high number.
 * @returns {string} A random number generated between low & high
 */
const getRandomNum = ( lowNum, highNum ) => {
    if ( isNaN(lowNum) || isNaN(highNum) ) {
        // keyword 'throw' & Error() method - referred to as "throw an exception" 
        throw Error("Sorry, you entered an invalid value.");
    } else {
        return randomNum = Math.floor( Math.random() * ((highNum - lowNum) + 1) + lowNum );
    }
}
console.log( getRandomNum(1, 1234) )
console.log( getRandomNum(10, 4321) )
console.log( `${getRandomNum(100, 9000)} is a random number between 100 & 9000` )



/**
 * Calculates the area of a rectangle/square
 * 
 * @param {number} width - The width of the shape.
 * @param {number} height - The height of the shape.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the shape & unit of measurement
 */

function getArea(width, height, unit) {
    const area = width * height;
    return `${area} ${unit}`;
}

// ARROW FUNCTION VERSION OF ABOVE FUNCTION DECLARATION
// arrow functions with only 1 arg do not require parenthesis'()'
// arrow functions with no args still parenthesis'()'

/*
const getArea = (x, y, unit) => {
    const area = x * y;
    return `${area} ${unit}`;
}
*/

// 'one-line' functions can have 'return' keyword omitted and gives an 'implicit return'
// curly braces also aren't required as shown below (one-line)

/*
const getArea = (x, y, unit) => x * y;
*/



function getDate() {
    var d = new Date().getFullYear();
    return d;
}



// pass the 'name' parameter default argument to render if (no arguments are passed) <<< this results in the data type 'undefined'
function sayGreeting( greeting = 'how are you?', name = 'visitor' ) {
    return `Hi ${name}, ${greeting}`;
}

console.log( sayGreeting(undefined, "Evan") )
// To avoid overwriting a default value, use 'undefined'



function isFieldEmpty() {
    // querySelector targets id 'username' rather than using 'getElementById'
    const field = document.querySelector('#username');
    // use the NOT '!' operator to test whether string is empty rather than writing out " <var>==='' "
    if ( !field.value ) {
        alert("Please provide a username");
    } 
}

/** JSDoc - proper way to document your code!!!
 *
 * [A short description of the myFunc function]
 *
 * @param {[param type]} param1 - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 * 
 * function myFunc( param1, param2 ) {
  // function returns a value...
}

 */