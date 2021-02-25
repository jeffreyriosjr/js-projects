// excercise #5
//Guess the number challenge

const guessCorrectNumber = () => {
    const correctNumber = Math.floor(Math.random() * 10 + 1);
    for(let i = 0; i <= 2; i++) {
    const guess = prompt('Guess a number from 1 to 10');
    
    if (guess == correctNumber) {
        alert('Awesome Possum! Thats right!');
        break;
    } else {
        alert('Sorry, Try again!');
       
    }
    if (i === 2) alert("you are all out of guesses");
}
};

