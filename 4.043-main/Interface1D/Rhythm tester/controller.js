
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        
        
    }    

    update() {
        
             
      display.clear();
      //new pixel gets put at 1, next pixel is shifted to 2. 

      rhythmOne.rhythmCycler();
      
      
//draws rhythm in
      let animationArrayOne = rhythmOne.rhythmAnimatorL();
      for (let i = 0; i < animationArrayOne.length; i++){
        let coloration1 = color(animationArrayOne[i],animationArrayOne[i],animationArrayOne[i]);
        display.setPixel(i, coloration1);
      }
      
//drawer player location    
    display.setPixel(playerOne.position, playerOne.playerColor);

//color glow on press
      if(playerOne.glowCheck()){
          //print(rhythmOne.activeBeat);
          if(rhythmOne.activeBeat){
        display.setPixel(playerOne.position-2, color(0,100,0));
        display.setPixel(playerOne.position-1, color(0,150,0));
      }else{
        print(rhythmOne.activeBeat);
        display.setPixel(playerOne.position-2, color(0,100,100));
        display.setPixel(playerOne.position-1, color(0,150,150));
      }
                        
    }
}
}

    function keyPressed() {
        if (key == "s" || key == "S") {
          playerOne.glow();
          
          
        }
        
      }//some press to check varable (press/time elapsed) --> look at millis

