// create array for alphabet

var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// variables for wins, losses and guesses - a feature i chose to add
var wins = 0;
var losses = 0;
var left = 10;
var guesses =  "";

var computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];

console.log(computerChoice)

// when the user presses a key, it will run the following function to get user key
document.onkeypress = function(event) {
    var userGuess = event.key;
    
    // do not run following lines if guess is not a letter
    if (userGuess < 'a' || userGuess > 'z') {
        return;
    }
    
    // if computerChoice is not set yet, set it
    if (computerChoice == null) {
        computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];
    }

    // if user guesses it, reset the game
    if(userGuess === computerChoice){
        wins++
        left = 10
        guesses = ""
        computerChoice = alphabets[Math.floor(Math.random()*alphabets.length)];
    }

    // if user does not guess it
    else {
        // decrement guesses left
        left--;

        // add userGuess to guesses
        if(guesses == "") // if first guess do not add the comma
            guesses = userGuess;
        else // else add the comma
            guesses += ", "+userGuess;

        // if out of guesses, reset the game and increment losses
        if(left == 0){
            losses++
            left = 10
            guesses = ""
            computerChoice = alphabets[Math.floor(Math.random()*alphabets.length)];
        }
    }

    // update UI
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('left').innerHTML = left;
    document.getElementById('guesses').innerHTML = guesses;
    //document.getElementById('debug').innerHTML = computerChoice;
}