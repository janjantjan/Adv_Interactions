
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        
        
    }    

    update() {
        
             
      display.clear();
      //new pixel gets put at 1, next pixel is shifted to 2. 

      rhythmOne.rhythmCycler();
      
      

      let animationArrayOne = rhythmOne.rhythmAnimatorL();
      for (let i = 0; i < animationArrayOne.length; i++){
        let coloration1 = color(animationArrayOne[i],animationArrayOne[i],animationArrayOne[i]);
        display.setPixel(i, coloration1);
      }
      
      
    display.setPixel(playerOne.position, playerOne.playerColor);
      
      if(playerOne.glowCheck()){
          print(display.displayBuffer[playerOne.position-1]);
          if(display.displayBuffer[playerOne.position-1]==color(80,80,80)||display.displayBuffer[playerOne.position-1]==color(80,80,80)){
        display.setPixel(playerOne.position-2, color(0,100,0));
        display.setPixel(playerOne.position-1, color(0,150,0));
      }else{
        display.setPixel(playerOne.position-2, color(0,100,100));
        display.setPixel(playerOne.position-1, color(0,150,150));
      }
                        
    }
}
}

    function keyPressed() {
        if (key == "s" || key == "S") {
          playerOne.glow();
          print('boop');
          //display.setPixel(playerOne.position-2, color(200,0,0));
        //display.setPixel(playerOne.position-1, color(220,0,0));
        }
        
      }//some press to check varable (press/time elapsed) --> look at millis

