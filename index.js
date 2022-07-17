
const userInput = document.getElementById('guess');

const submit = document.getElementById('submit');

const guesses = document.getElementsByTagName('li');

const inputFeedback = document.getElementById('feedback');

var theNumber = Math.floor(Math.random() * 100);

const playAgain = document.getElementById('again');


listItemIdx = 0;

submit.addEventListener('click', function(event) {
    if (userInput.value < 1 || userInput.value > 101){
        alert("Please enter number from 1 to 100")
    } else {

    guesses[listItemIdx].innerText = userInput.value;
    listItemIdx++;
    userInput.value = '';
    }
});

submit.addEventListener("click", function (event) {
    var userInput = document.getElementById('guess');
    var inputFeedback = document.getElementById('feedback');
    if (userInput.value === theNumber) {
        inputFeedback.innerText = "You guessed correctly!"
    } else if (userInput.value < theNumber) {
        inputFeedback.innerText = "You guessed too low!"
    } else if (userInput.value > theNumber) {
        inputFeedback.innerText = "You guessed too high!"
    }
});
