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
        this.rhythmAnimation = [];

        //fill the rhythm animation array:
        for(let i = 0; i< this.tempoMark*24; i++){
            if(this.rhythmArray[i] == 0){
                this.rhythmAnimation[i] = color(0,0,0);
                print('BLK'+this.rhythmArray[i]);
                
            }
            else { this.rhythmAnimation[i] = color(60,60,60);
                print('GRY'+this.rhythmArray[i]);}
            
        }
        
    }

    rhythmCycler(){//cycles every tickTime (mS) and should be called by update(). Returns index of pixelarray that should be called.
        let millis_now = millis();
        print(this.tickTime);
        let millis_elapsed = millis_now - this.millis_starter;
        if (millis_elapsed >= this.tickTime) {
            if(this.currentTick >= (this.tempoMark*24)){
                this.currentTick = 0;
            } 
            else {
                    this.currentTick = this.currentTick+1;
                
                }
        }
       

        for (let i = 0; i<this.currentTick+1; i++){
            if (i<20){
                display.setPixel(i, rhythmOne.grabPixel(this.currentTick-i+1));
                
            }
            else {
                display.setPixel(i, color(0,0,0));
            }    
                        
        }
    }


    grabPixel(_index){
        return this.rhythmAnimation[_index];
    }
   

}