
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
    }



    // Move player based on keyboard input
    move(_direction) {

        // increments or decrements player position
        this.position = this.position + _direction;
         
    } 
  }