class Rhythm {//fusion of a player and animation 
  
    constructor(_bpm, _tempoMark, _rhythmArray) { 
        //Note that each quarter note is divided into 12 ticks and rhythmArray contains 2 measures
        //If a tempomark is 3 that means 3/4 time. This will mean that the array will have a length of 72.

        this.tickTime = parseInt(1000/(_bpm*12/60)); // how long the rhythm animator refreshes.
        this.rhythmColor = 80;
        this.currentTick = -1; // index of current tick 
        this.rhythmArray = _rhythmArray;
        this.tempoMark = _tempoMark;
        this.millis_starter = millis_start;
        this.rhythmSupAnimation = [];
        this.rhythmAnimation = [];
        this.activeBeat = false;

        //fill the rhythm animation array:
        for(let i = 0; i< this.tempoMark*24; i++){
            if(this.rhythmArray[i] == 0){
                this.rhythmSupAnimation[i] = 0;
                //print('BLK'+this.rhythmArray[i]);
                
            }
            else { this.rhythmSupAnimation[i] = this.rhythmColor;
                //print('GRY'+this.rhythmArray[i]);
            }
            
        }
        this.rhythmArray = this.rhythmArray + this.rhythmArray; //4 measures long
        this.rhythmArray = this.rhythmArray + this.rhythmArray; //8 measures long
        this.rhythmArray = this.rhythmArray + this.rhythmArray; //16 measures long
        this.rhythmArray = this.rhythmArray + this.rhythmArray; //32 measures long
        //print(this.rhythmArray.length);
    }

    rhythmCycler(){//cycles every tickTime (mS) and should be called by update(). Returns index of pixelarray that should be called.
        let millis_now = millis();
        let millis_elapsed = millis_now - this.millis_starter;
        if (millis_elapsed >= this.tickTime) {
            if(this.currentTick >= (this.tempoMark*24)){
                this.currentTick = 0;
                this.millis_starter = millis();
            } 
            else {
                    this.currentTick = this.currentTick+1;
                    this.millis_starter = millis();
                }
        }
    
        
    }

    rhythmAnimatorL(){ //returns an array of 60s and 0s that is 12 long
   
        for (let i = 0; i < 12; i++){// if more than span, we stop filling
               
            if (i< (this.currentTick+1)){
                this.rhythmAnimation[i] = this.rhythmSupAnimation[this.currentTick-i];
            }
            else{
                this.rhythmAnimation[i] = 0;
            }

            if (this.rhythmAnimation[11]==this.rhythmColor||this.rhythmAnimation[10]==this.rhythmColor){
                this.activeBeat=true;
    
            }
            else{
                this.activeBeat=false;
            }
        }

        return this.rhythmAnimation;
    }

    rhythmAnimatorR(){ //returns an array of 60s and 0s that is 18 long
   
        for (let i = 0; i < 12; i++){// if more than span, we stop filling
               
            if (i< (this.currentTick+1)){
                
                this.rhythmAnimation[12-i] = this.rhythmSupAnimation[this.currentTick-i];
            }
            else{
                this.rhythmAnimation[i] = 0;
            }
        }
        if (this.rhythmAnimation[0]==this.rhythmColor||this.rhythmAnimation[1]==this.rhythmColor){
            this.activeBeat=true;

        }
        else{
            this.activeBeat=false;
        }
        return this.rhythmAnimation;
    }
    
   rhythmShade(){
       return this.rhythmColor;
   }

}