
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
        this.kickCount = 0;
    }

    kick(){
        this.kickCount = this.kickCount + 1;
    }

    clearKick(){
        this.kickCount = 0;
    }

    // Move player based on keyboard input
    move() { //happens every 120 frames
                
        // increments or decrements player position
        this.position = this.position + this.kickCount - 10;
         
    } 
  }