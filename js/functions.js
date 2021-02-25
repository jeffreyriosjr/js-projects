/****Functions******/

//Basic Form

function showMyName (firstName, lastName) {
    
    //setting my variables
    // concat my two parameters to form one new string
    let fullName = firstName + " " + lastName;
   
// use the console.log to render fullName
    console.log('You are: ', fullName);

}

showMyName ("Jeffrey", "Rios");

function multiplyTwoNumbers(firstNumber, secondNumber) {
    // take the passed parameters and multiply
    // setting to a new variable

    let multipliedNumbers = firstNumber * secondNumber;

    //console.log the result
    console.log('These numbers are multiplied!', multipliedNumbers);
}

multiplyTwoNumbers(15, 13);

/*****Arrow Functions*******/
// Base function syntax
function basicSyntaxFunction() {}
// ARROW FUNCTION SYNTAX
const countToTenFromNewStartingPoint = startingNumber => {
    //First Check Number to see if less than 10
    if (startingNumber <= 10) {

        for (startingNumber; startingNumber <= 10; startingNumber++){
           
            console.log(startingNumber);
        
            }
        
    } else {
        alert('The number is larger than 10');

    }

    };
    
    //If less than 10 start loop
    //else let user know
    // create a for lop that counts to 10

countToTenFromNewStartingPoint(5);

// Create function to alert first and last name
const welcomeNewUser = () => {
    //Initialize variables
    let firstName = "Jeffrey";
    let lastName = "Rios";
    let welcomeMessage = "Hey There, ";
    let fullMesssage = welcomeMessage +firstName + " " + lastName;

    //alert to render the concat name with welcome
    alert(fullMesssage);
};


// Add a button to your html page
// tied to a function
//function alerts your user with your favorite animal

const myFavAnimal = () => {
    //Initialize variables
   
    let myFavAnimal = "Cheetah!";
    let fullMesssage = myFavAnimal;

    //alert to render the concat name with welcome
    alert(fullMesssage);
};

const getUserName = () => {
    //prompt the user name
    //bind that value to a variable
    //render a welcome message

    let userName = prompt("Hey, whats your name?");
    alert("Welcome, " + userName);
}

getUserName();

//excercise #3

const verifyAge = () => {

const age = prompt("Also, what is your age?");


 age < 13 ?  alert('Sorry, come back when older!') :
             alert ('Welcome, come on in');

}


verifyAge();

//excericise #4





// excercise #5

const guessCorrectNumber = () => {
    
    const guess = prompt('Guess a number from 1 to 10');
    const correctNumber = Math.floor(Math.random() * 10 + 1);
    if (guess == correctNumber) {
        alert('Awesome Possum! Thats right!');
    } else {
        alert('Sorry, Try again!');
    }
}

