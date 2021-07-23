const test = [
    ['How many continents are there?', 7],
    ['How many months are there?', 12],
    ['How many days in a year are there?', 365],
    ['How many weeks in a year are there?', 52],
    ['How many bits are in byte?', 8],
];

const testUser = arr => {
    const result = document.querySelector('main');
    let correctAnswers = 0;
    let correct = [];
    let incorrect = [];
    for ( let i = 0; i < arr.length; i++ ) {
        let answer = prompt( arr[i][0] );
        if ( +answer === arr[i][1] ) {
            correctAnswers++;
            correct.push( arr[i][0] );
        } else {
            incorrect.push( arr[i][0] );
        }
    }
    const createList = arr => {
        let list = '';
        for ( let i = 0; i < arr.length; i++ ) {
            list += `
            <li>${arr[i]}</li>
            `;
        }
        return list;
    }
    let message = `<h1>You got <strong>${correctAnswers}</strong> out of <strong>${arr.length}</strong> questions correct!</h1>
                <br><h2>Correct:</h2> ${ createList(correct) }
                <br><h2>Incorrect:</h2> ${ createList(incorrect) }
                <br><h2>Score:</h2>   
                `;
        if ( correctAnswers === arr.length ) {
            message += `<h1>GOLD!</h1>`;
        } else if ( correctAnswers >= arr.length - 2 ) {
            message += `<h1>SILVER:)</h1>`;
        } else if ( correctAnswers >= arr.length - 4 ) {
            message += `<h1>BRONZE:(</h1>`;
        } else {
            message += `<h1>TRY AGAIN!</h1>`;
        }
    result.innerHTML = message;
}

testUser( test );