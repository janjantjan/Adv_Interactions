
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
        this.millis_starter = millis_start;
        this.glowArray = [color(200,0,0), color(225,0,0)];
        this.glowStatus = false;
    }

    glow(){
        this.glowStatus = true;
        //print(this.glowStatus);
        this.millis_starter=millis();
        
    }
   
    glowCheck(){
        let millis_now = millis();
        let millis_elapsed = millis_now - this.millis_starter;
        if (millis_elapsed >= 300) {
           this.glowStatus = false;
           this.millis_starter=millis();
           //print(this.glowStatus);
         }
        return this.glowStatus;
        
    }

  }