
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
    move(_direction) {//for debugging

        // increments or decrements player position
        this.position = this.position + _direction;
    
         
    } 

    swim(_direction){ // three options: swim forawrd, stay in place, pulled inward
        if(this.kickCount>5){
            this.position = this.position + _direction;
        } else if(this.kickCount < 3) {
            this.position = this.position - _direction;
        }
    }//alt sol (var that changes accordign to key press) (key press V. time balancing)
  }