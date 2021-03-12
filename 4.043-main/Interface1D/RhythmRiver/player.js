
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position, _number) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
        this.kickCount = 0;
        this.playerNumber = _number; // 1=right, -1 = left
        this.millis_starter = millis_start;
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
       let millis_elapsed = millis_now - this.millis_starter;
       if (millis_elapsed >= 500) {
           let gains = parseInt((this.kickCount-2)/2);
           this.move(gains);
           this.millis_starter=millis();
           this.clearKick();
       }

    }//alt sol (var that changes accordign to key press) (key press V. time balancing)
  }