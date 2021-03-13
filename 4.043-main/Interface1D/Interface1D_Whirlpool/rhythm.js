class Rhythm {//fusion of a player and animation 
  
    constructor(_bpm, _tempoMark, _rhythmArray) { 
        //Note that each quarter note is divided into 12 ticks and rhythmArray contains 2 measures
        //If a tempomark is 3 that means 3/4 time. This will mean that the array will have a length of 72.

        this.tickTime = parseInt(1000/(_bpm*12/60)); // how long the rhythm animator refreshes.
        this.rhythmColor = color(60,60,60);
        this.currentTick = -1; // index of current tick 
        this.rhythmArray = _rhythmArray;
        this.tempoMark = _tempoMark;
        this.tickStatus = false; 
        this.millis_starter = millis_start;
        
    }

    rhythmCycler(){//cycles every tickTime (mS)
        let millis_now = millis();
        let millis_elapsed = millis_now - this.millis_starter;
        if (millis_elapsed >= this.tickTime) {
            if(this.currentTick >= (this.tempoMark*24)){
                this.currentTick = 0;
            } 
            else {
                    this.currentTick = this.currentTick+1;
                    if (this.rhythmArray(this.currentTick) == 1){
                        this.tickStatus = true;
                    } else { this.tickStatus = false;}
                }
        }
    }
    
}