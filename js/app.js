"use strict";
// Ask for user name
var user = prompt('Hello, what is your name?');
console.log('User name: ', user);

// Explain the premise
alert('OK, ' + user + ', we\'re going to play a little yes or no guessing game about me.');

// Get ready to store the number of correct answers
var numCorrect = 0;
console.log('numCorrect initialized at: ' + numCorrect.toString());

// Start asking questions
var answer = prompt(user + ', do you think I have any kids?');
// Make answer lowercase for evaluation
console.log('User answer 1: ' + answer + ', correct is no');
answer = answer.toLowerCase();
console.log('Answer 1 in lower case: ' + answer);

// Correct answer is no, respond accordingly
// If input is not understood, it's wrong
if(answer === 'yes' || answer === 'ye' || answer === 'y')
{
    alert('Actually, ' + user + ', I don\'t.');
} else if(answer === 'no' || answer === 'n')
{
    alert('That\'s right, ' + user +', I don\'t!');
    numCorrect++;
} else {
    alert('I\'m afraid I didn\'t understand that, ' + user + ', so I\'m marking it as wrong.');
}
console.log('numCorrect after first question: ' + numCorrect.toString());

// No need for more variables, so reuse answer here
answer = prompt('Next, is my name pronounced with a short \'a\'?');
// Make answer lowercase for evaluation
console.log('User answer 2: ' + answer + ', correct is no');
answer = answer.toLowerCase();
console.log('Answer 2 in lower case: ' + answer);

// Correct answer is no, same process as the first question
if(answer === 'yes' || answer === 'ye' || answer === 'y')
{
    alert('No, ' + user + ', it\'s pronounced with a long "a". Day-nuh.');
}else if(answer === 'no' || answer === 'n')
{
    alert('That\'s right, ' + user + ', it\'s a long "a"!');
    numCorrect++;
} else {
    alert('I\'m afraid I didn\'t understand that, ' + user + ', so I\'m marking it as wrong.');
}
console.log('numCorrect after second question: ' + numCorrect.toString());

// Reuse answer again again for question 3
answer = prompt(user + ', do you think I\'ve lived on the West Coast most of my life?');
// Make answer lowercase for evaluation
console.log('User answer 3: ' + answer + ', correct is no');
answer = answer.toLowerCase();
console.log('Answer 3 in lower case: ' + answer);

// Correct answer is no, same process as the first question
if(answer === 'yes' || answer === 'ye' || answer === 'y')
{
    alert('I actually haven\'t, ' + user + '!');
} else if(answer === 'no' || answer === 'n')
{
    alert('That\'s right, ' + user + '! I grew up on the East Coast.');
    numCorrect++;
} else {
    alert('I\'m afraid I didn\'t understand that, ' + user + ', so I\'m marking it as wrong.');
}
console.log('numCorrect after third question: ' + numCorrect.toString());

// Reuse answer again again for question 4
answer = prompt('Here\'s a fun one, ' + user + ', did I recently get my first video game console?');
// Make answer lowercase for evaluation
console.log('User answer 4: ' + answer + ', correct is no');
answer = answer.toLowerCase();
console.log('Answer 4 in lower case: ' + answer);

// Correct answer is no, same process as the first question
if(answer === 'yes' || answer === 'ye' || answer === 'y')
{
    alert('No, ' + user + ', my first was an Atari 2600 back in the 80s!');
}else if(answer === 'no' || answer === 'n')
{
    alert('That\'s right, ' + user + ', I\'ve been at that for quite a while!');
    numCorrect++;
} else {
    alert('I\'m afraid I didn\'t understand that, ' + user + ', so I\'m marking it as wrong.');
}
console.log('numCorrect after fourth question: ' + numCorrect.toString());

// Reuse answer again again for question 5
answer = prompt('One last question, ' + user + ', am I over 30 years old?');
// Make answer lowercase for evaluation
console.log('User answer 5: ' + answer + ', correct is no');
answer = answer.toLowerCase();
console.log('Answer 5 in lower case: ' + answer);

// Correct answer is yes this time, same process
if(answer === 'yes' || answer === 'ye' || answer === 'y')
{
    alert('That\'s right!');
    numCorrect++;
}else if(answer === 'no' || answer === 'n')
{
    alert('That\'s wrong, ' + user + ', I\'ve been around for a long time!');
} else {
    alert('I\'m afraid I didn\'t understand that, ' + user + ', so I\'m marking it as wrong.');
}
console.log('numCorrect after fifth question: ' + numCorrect.toString());

// Get var ready for the guessing game loop
var guessingAnswerWrong = true;
// Set number of guesses allowed
var guessesRemaining = 4;


// Generate a number
var randomNum = 1 + Math.floor(Math.random() * 10);
// I looked up the method for this on w3 schools
// https://www.w3schools.com/js/js_random.asp

console.log('Number guessing answer: ' + randomNum.toString());

do{
    // Reuse answer again for question 6
    answer = prompt('What number am I thinking of, ' + user + '? Guess from 1 to 10. You have four guesses.')
    // log the user input, and the correct answer
    console.log('User guessed: ' + answer);
    console.log('Correct answer: ' + randomNum.toString());
    console.log('Guesses Remaining: ' + guessesRemaining.toString());
    //parse the answer once now instead of several times later
    answer = parseInt(answer);

    if(answer === randomNum)
    {
        alert('That\'s right!');
        numCorrect++;
        guessingAnswerWrong = false;
    }else if(answer > randomNum)
    {
        alert('That\'s too high, try lower.');
        guessesRemaining--;
    }else
    {
        alert('That\'s too low, try higher.');
        guessesRemaining--;
    }
} while(guessingAnswerWrong &&  guessesRemaining);

console.log('numCorrect after sixth question: ' + numCorrect.toString());

// Set up array for question 7
var languagesUsed = ['Latin', 'C', 'C++', 'Java'];
// Reuse guesses remaining, set to 6
guessesRemaining = 6;

// Reuse answer again for question 7
alert('Can you guess a language I\'ve worked with, coding or otherwise? (not counting English, HTML, CSS, or Javascript) You have 6 guesses.');
console.log('Guesses initialized to: ' + parseInt(guessesRemaining));
// Initialize guessing answer var
guessingAnswerWrong = true;

do
{
    answer = prompt('What is your guess, ' + user + '? (remember, languages are proper nouns)\n You have ' + guessesRemaining.toString() + ' guesses remaining.');
    console.log('User guessed ' + answer + ' with ' + guessesRemaining.toString() + ' guesses remaining.');

    if(languagesUsed.includes(answer))
    {
        alert('That\'s right! I have worked with ' + answer + '!');
        numCorrect++;
        guessingAnswerWrong = false;
    } else
    {
        alert('Nope! I haven\'t worked with ' + answer + '!');
        guessesRemaining--;
    }
} while(guessingAnswerWrong && guessesRemaining);

console.log('numCorrect after seventh question: ' + numCorrect.toString());



// Add up total correct, congratulate if all are correct, 
// suggest retrying if not
if(numCorrect === 7 )
{
    alert('That\'s great, ' + user + ', you got them all correct!');
} else
{
    alert(user + ', you got ' + numCorrect.toString() + ' out of 7 correct, try again and see if you can get them all!');
}