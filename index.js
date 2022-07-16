const theNumber = Math.floor((Math.random() * 100) + 1);

const userInput = document.getElementById('guess');

const submit = document.getElementById('submit');

const guesses = document.getElementsByTagName('li');

listItemIdx = 0;


submit.addEventListener('click', function(event) {
    guesses[listItemIdx].innerText = userInput.value;
    listItemIdx++;
    userInput.value = '';
  });

  

// Adds guesses to UL's

// indicator that says how close you are

// hint button and reset game are bonuses?

// 