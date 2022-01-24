// function that goes 1-100 and grabbs a random index
//that takes in an argument
        // <= 5 times
// compares argument to random index
    //if < index
       // return "higher"
    //else if > index
       //return "lower"
    //else
       //return
    //"YOU WIN!!!!!!!"
   

    // create a variable that holds your targetValue
    function getTargetValue(max) {
        return Math.floor(Math.random() * 100);
      }
      //console.log(getTargetValue());
// create a variable that will hold the userGuess
    let userGuess = "input-block";
    var count = 5;
// create a function that comparesValues the targetValue to userGuess
      function comparesValues (getTargetValue, userGuess){
          // if "===" display the user wins
          if (getTargetValue === userGuess) {
            return "YOU WIN!!!!!!";
            // if !== --> display a message that tells the user if userGuess > or < targetValue
           }else if (getTargetValue < userGuess) {
             return "LOWER..";
           }else if (getTargetValue > userGuess) {
             return "HIGHER..";                  
           }else if (guessArr === count) {
             return "GAME OVER";
           }
           // push the previous userGuess in an array and display that array's values to the user so they don't guess the same number
           let guessArr = userGuess.push();
         }

// create a function that will resetGame()
        function resetGame(){
            let(guessArr[count]) = 0;
        }
// create two buttons
//   submitAnswerButton button that runs comparesValues()
styled.addEventListener ('click', function(event) {
    // Run this code on click
    return comparesValues();
})
//   resetGameButton button that runs resetGame()
reset.addEventListener ('click', function(event) {
        // Run this code on click
        return resetGame();
    })