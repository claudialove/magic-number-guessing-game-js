
window.setTimeout(function(){

    function playGame()  {

        //create number
        var secretNum = 5;
        
        //prompt user to guess
        var guess = prompt("Try and guess the number i'm thinking between 1 and 10");
        
        
        //while loop instead
        while (Number(guess) !== secretNum) {
           
            //too high
            if (Number(guess) > secretNum && Number(guess) <= 10) {
                alert ("Too high, guess again...")
            }
            //too low
           else if (Number(guess) < secretNum) {
                alert ("Too low, guess again...")
            }
            //out of bounds
            else if (Number(guess) > 10 ) {
               alert ("that number is NOT between 1-10");
            }
            else if (Number(guess) = (null) ) {
                alert ("YOU CAN'T LEAVE IT BLANK!!");
             }
            var guess = prompt("Try and guess the number i'm thinking between 1 and 10");
        };
            //correct guess
            alert("YOU WIN!!!!!")
        
        }
        
        playGame();


}, 500);


