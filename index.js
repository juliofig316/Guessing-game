
const userInput = document.getElementById('guess');

const submit = document.getElementById('submit');

const guesses = document.getElementsByTagName('li');

const inputFeedback = document.getElementById('feedback');

const theNumber = Math.floor(Math.random() * 100) + 1;


listItemIdx = 0;

submit.addEventListener('click', function(event) {
    if (userInput.value < 1 || userInput.value > 100){
        alert("Please enter number from 1 to 100")
    } else {
    guesses[listItemIdx].innerText = userInput.value;
    listItemIdx++;
    userInput.value = '';
    }
});

submit.addEventListener("Click", function(event){
    if (userInput.value === theNumber) {
        inputFeedback.innerText("You guessed correctly!")
    } else if (userInput.value < theNumber) {
        inputFeedback.innerText("You guessed too low!") 
    } else if (userInput.value > theNumber) {
        inputFeedback.innerText("You guessed too high!")
        }
    });

// restart the game from 0

//  const reset = document.getElementById("again");


// hint button
