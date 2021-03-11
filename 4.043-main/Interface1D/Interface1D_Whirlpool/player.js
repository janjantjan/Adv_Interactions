
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position, _number) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
        this.kickCount = 0;
        this.playerNumber = _number; // 1=right, -1 = left
    }

    kick(){
        this.kickCount = this.kickCount + 1;
    }

    clearKick(){
        this.kickCount = 0;
    }

    // Move player based on keyboard input
    move(_direction) {//for debugging

        // increments or decrements player position
        this.position = this.position + (_direction*this.playerNumber);
    
         
    } 

    swim(){ // three options: swim forawrd, stay in place, pulled inward
       let millis_now = millis();
       let millis_elapsed = millis_now - millis_start;
       if (millis_elapsed >= 1000) {
           let gains = parseInt((kickCount-5)/2);
           this.move(gains);
           millis_start=0;
       }
    }//alt sol (var that changes accordign to key press) (key press V. time balancing)
  }