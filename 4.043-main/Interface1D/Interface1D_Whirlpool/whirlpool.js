
//based on the structure of player.js


class Whirlpool {
  
    constructor(_color, _position) {
        this.playerColor = _color;
        this.position = _position;
        this.leftReach = 2;
        this.rightReach = 2;
    }



    // Move player based on keyboard input
    grow() {

        // increments or decrements player position
        this.righReach = this.rightReach + 1;
        this.leftReach = this.leftReach + 1;
      
    } 

    splash(_direction){ //_direction must be -1 or 1
        if(_direction==-1){
            this.leftReach =  this.leftReach + 1;
        }
        if(_direction==1){
            this.righReach = this.rightReach + 1;
        }
    }
  }