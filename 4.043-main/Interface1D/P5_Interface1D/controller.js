
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        this.gameState = "PLAY";

    }
    
    // 
    update() {

        // STATE MACHINE ////////////////////////////////////////////////
        // This is where your game logic lives
        /////////////////////////////////////////////////////////////////
        switch(this.gameState) {

            // This is the main game state, where the playing actually happens
            case "PLAY":

                // clear screen at frame rate so we always start fresh      
                display.clear();
            
                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);
                

                // now add the whirl_center
                display.setPixel(whirl_center.position, whirl_center.playerColor);

                
                // check if player has caught whirl_center
                if (playerOne.position == whirl_center.position)  {
                    playerOne.position = 4; //reset position
                    playerTwo.position = 25;
                    whirl_center.position = 15;
                    playerOne.score++;              // increment score
                    this.gameState = "COLLISION";   // go to COLLISION state
                }
                
                // check if other player has caught whirl_center        
                if (playerTwo.position == whirl_center.position)  {
                    playerOne.position = 4; //Reset position
                    playerTwo.position = 25;
                    whirl_center.position = 15;
                    playerTwo.score++;              // increment their score
                    this.gameState = "COLLISION";   // go to COLLISION state
                }

                break;

            // This state is used to play an animation, after a whirl_center has been caught by a player 
            case "COLLISION":
                
                 // clear screen at frame rate so we always start fresh      
                 display.clear();

                // play explosion animation one frame at a time.
                // first figure out what frame to show
                let frameToShow = collisionAnimation.currentFrame();    // this grabs number of current frame and increments it 
                
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
                    } else {
                        whirl_center.position = parseInt(15);  // move the whirl_center to a new random position
                        this.gameState = "PLAY";    // back to play state
                    }
                } 

                break;

            // Game is over. Show winner and clean everything up so we can start a new game.
            case "SCORE":       
            
                // reset everyone's score
                playerOne.score = 0;
                playerTwo.score = 0;

                // put the whirl_center somewhere else, so we don't restart the game with player and whirl_center in the same place
                playerOne.position = 4;
                playerTwo.position = 25;
                whirl_center.position = 15;
                

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
function keyPressed(keycode) {
    // Move player one to the left if letter spacebar is pressed
    if (keycode==32) {
        playerOne.move(-1);
      }
    

  }