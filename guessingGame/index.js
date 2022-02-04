const introHeader = document.getElementById("introHeader");
const nameFormElement = document.getElementById("nameForm");
const nameFormInputElement = document.getElementById("nameInput");
const pastUserList = document.getElementById("pastUserList");
const mainResetButton = document.getElementById("mainResetButton");
​
let usersName = "";
​

// When a user enters their name into our input
nameFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nameFormInputElement.value === "") return;
​
  // And when they click submit
  usersName = nameFormInputElement.value;
​
  // Then I want the welcome message to update and welcome the new user
  introHeader.innerText = `Welcome, ${usersName}, to Cookie Clicker!`;
​
  // After submitting, clear out our input to communicate it was used
  nameFormInputElement.value = "";
​
  // Add a new user to our list of past users
​
  // IF WE DON'T HAVE SPACES WE WANNA PLACE INTO:
  //   const newLi = document.createElement("li");
  //   newLi.innerText = usersName;
  //   pastUserList.appendChild(newLi);
​
  console.log(pastUserList.children);
  // Go thorugh all of the items in our user list
  for (var i = 0; i < pastUserList.children.length; i++) {
    const currLi = pastUserList.children[i];
    console.log(pastUserList.children);
​
    // Find the space for our new user
​
    // Check if this space is our current user
    if (currLi.innerText === usersName) break;
    // Check if this space is empty / userless
    if (currLi.innerText === "-") {
      // Put our new user in that space
      currLi.innerText = usersName;
      break;
    }
  }
​
  // * If the user isn't added already
});

// Whenever we click our button
mainResetButton.addEventListener("click", function () {
  // 
​
});
​


// //intakes
// const inputBlock = document.getElementById("inputBlock");
// const submitButton = document.getElementById("submitButton");
// const resetButton = document.getElementById("resetButton");
// //displays
// const guessList = document.getElementById("guessList");
// // const secondGuess = document.getElementById("secondGuess");
// // const thirdGuess = document.getElementById("thirdGuess");
// // const fourthGuess = document.getElementById("fourthGuess");
// // const finalGuess = document.getElementById("finalGuess");



// // max gusses
// let count = {} <= 5;
// //makes getTargetValue smaller
// let a = getTargetValue();
// // create a variable that will hold the userGuess
//  // (b) makes userGuess smaller
// let b = inputBlock ;
// // make guessArr an empty array
// let guessArr = {};


// // create a variable that holds your targetValue
// function getTargetValue(max) {
//    return Math.floor(Math.random() * 100);
//      }
//      //console.log(getTargetValue());
//  console.log(count);

// // create a function that comparesValues the targetValue(a) to userGuess(b)
// function comparesValues (a, b){
//   // if "===" display the user wins
//   if (a === b) {
//   return "YOU WIN!!!!!!";
//     // if !== display a message that tells the user if (b) > or < (a)
//   }else if (a < b) {
//    return "LOWER..";
//   }else if (a > b) {
//    return "HIGHER..";                  
//   }else if (guessArr === count) {
//    return "GAME OVER";
//   }

//    // push the previous userGuess in an array and display that array's values to the user so they don't guess the same number
//    let guessArr = inputBlock.push();
// };


// // create a function that will resetGame()
// function resetGame(){
// let count = 0;
// };

// // create two buttons

// //   submitAnswerButton button that runs comparesValues()
// submitButton.addEventListener ('click', function (event) {
//   // Run this code on click
//   event.comparesValues();
// })
// // resetGameButton button that runs resetGame()
// resetButton.addEventListener ('click', function () {
//   // Run this code on click
//   resetGame();
// })

// ​
//   console.log(guessList.children);
//   // Go thorugh all of the items in our user list
//   for (var i = 0; i < guessList.children.length; i++) {
//     const currLi = guessList.children[i];
//     console.log(guessList.children);
// ​
//     // Find the space for our new user
// ​
//     // Check if this space is our current user
//     if (currLi.innerText === userGuess + comparesValues) break;
//     // Check if this space is empty / userless
//     if (currLi.innerText === " ") {
//       // Put our new user in that space
//       currLi.innerText = userGuess + comparesValues;
//       break;
//     }
//   }
// ​
//   // * If the user isn't added already
// });
