
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        this.gameState = "PLAY";

    }    

    update() {
        
        switch(this.gameState) {

            // This is the main game state, where the playing actually happens
            case "PLAY":

                print(playerOne.kickCount);      
                display.clear();
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);
                display.setPixel(whirl.position, whirl.whirlColor);
                playerOne.swim();
                playerTwo.swim();
                
        

                for(let i = 0; i < whirl.leftReach; i++){
                    display.setPixel(whirl.position-(whirl.leftReach-i), color(140-(i*20),188,185));
                }

                for(let i = 0; i < whirl.rightReach; i++){
                    display.setPixel(whirl.position+(whirl.rightReach-i), color(140-(i*20),188,185));
                }

                //insert move function here that executes every 1 second
                //counter should be declared in set up
                      
                
                // check if player 1 has caught whirl_center --> player two wins
                if (playerOne.position >= (whirl.position-whirl.leftReach)) {
                    
                    playerOne.position = startOne; //reset position
                    playerTwo.position = startTwo;
                    whirl.position = startPool;

                    playerTwo.score++;     
                    whorlAnimation.setActive(playerTwo.playerColor);       
                    this.gameState = "WHORL";   // go to WHORL state
                }
                
                // check if player 2 has caught whirl_center  --> player one wins  
                if (playerTwo.position <= (whirl.position+whirl.rightReach)) {

                    playerOne.position = startOne; //reset position
                    playerTwo.position = startTwo;
                    whirl.position = startPool;

                    playerOne.score++;              // increment their score
                    whorlAnimation.setActive(playerOne.playerColor);   
                    this.gameState = "WHORL";   // go to COLLISION state
                }


                if (playerTwo.position == 35)  {

                    playerOne.position = startOne; //reset position
                    playerTwo.position = startTwo;
                    whirl.position = startPool;

                    playerTwo.score++; 
                    whorlAnimation.setActive(playerTwo.playerColor);   
                    //this.gameState = "COLLISION";   // go to COLLISION state ... keep it
                }

                if (playerOne.position == 0)  {
                    playerOne.position = startOne; //reset position
                    playerTwo.position = startTwo;
                    whirl.position = startPool;

                    playerOne.score++;  
                    whorlAnimation.setActive(playerOne.playerColor);   
                    //this.gameState = "COLLISION";   // go to COLLISION state
                }

                break;

            // This state is used to play an animation, after a whirl_center has been caught by a player 
            case "WHORL":
                
                 // clear screen at frame rate so we always start fresh      
                 display.clear();

                // play explosion animation one frame at a time.
                // first figure out what frame to show
                let frameToShow = whorlAnimation.currentFrame();    // this grabs number of current frame and increments it 
                
                // then grab every pixel of frame and put it into the display buffer
                for(let i = 0; i < whorlAnimation.pixels; i++) {
                    display.setPixel(i,whorlAnimation.animation[frameToShow][i]);                    
                }

                //check if animation is done and we should move on to another state
                if (frameToShow == whorlAnimation.animation.length-1)  {
                    
                    // We've hit score max, this player wins
                    if (playerOne.score >= score.max) {
                        score.winner = playerOne.playerColor;   // store winning color in score.winner
                        this.gameState = "SCORE";               // go to state that displays score
                    
                    // We've hit score max, this player wins
                    } else if (playerTwo.score >= score.max) {
                        score.winner = playerTwo.playerColor;   // store winning color in score.winner
                        this.gameState = "SCORE";               // go to state that displays score

                    // We haven't hit the max score yet, keep playing    
                    } 
                } 

                break;

            case "COLLISION":
                
                 // clear screen at frame rate so we always start fresh      
                 display.clear();

                // play explosion animation one frame at a time.
                // first figure out what frame to show
                frameToShow = collisionAnimation.currentFrame();    // this grabs number of current frame and increments it 
                
                // then grab every pixel of frame and put it into the display buffer
                for(let i = 0; i < collisionAnimation.pixels; i++) {
                    display.setPixel(i,collisionAnimation.animation[frameToShow][i]);                    
                }

                //check if animation is done and we should move on to another state
                if (frameToShow == collisionAnimation.animation.length-1)  {
                    
                    // We've hit score max, this player wins
                    if (playerOne.score >= score.max) {
                        score.winner = playerOne.playerColor;   // store winning color in score.winner
                        this.gameState = "SCORE";               // go to state that displays score
                    
                    // We've hit score max, this player wins
                    } else if (playerTwo.score >= score.max) {
                        score.winner = playerTwo.playerColor;   // store winning color in score.winner
                        this.gameState = "SCORE";               // go to state that displays score

                    // We haven't hit the max score yet, keep playing    
                    } 
                } 

                break;
            // Game is over. Show winner and clean everything up so we can start a new game.
            case "SCORE":       
            
                // reset everyone's score
                playerOne.score = 0;
                playerTwo.score = 0;

                // put the whirl_center somewhere else, so we don't restart the game with player and whirl_center in the same place
                playerOne.position = startOne;
                playerTwo.position = startTwo;
                whirl.position = startPool;
                

                //light up w/ winner color by populating all pixels in buffer with their color
                display.setAllPixels(score.winner);                    

                break;

            // Not used, it's here just for code compliance
            default:
                break;
        }
    }
  
}


// This function gets called when a key on the keyboard is pressed
function keyPressed() {
    if (key == "A" || key == "a") {
      playerOne.kick();
    }
    if (key == "D" || key == "d") {
        whirl.rightReach = whirl.rightReach + 1;
    }
    if (key == "J" || key == "j") {
        whirl.leftReach = whirl.leftReach + 1;
    }
    if (key == "L" || key == "l") {
      playerTwo.kick();
    }
    if (key == "R" || key == "r") {
      controller.gameState = "PLAY";
      whirl.leftReach = 2;
      whirl.rightReach = 2;
    }
  }//some press to check varable (press/time elapsed) --> look at millis