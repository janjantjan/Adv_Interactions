
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        
        
    }    

    update() {
        
             
      display.clear();
      //new pixel gets put at 1, next pixel is shifted to 2. 

      rhythmOne.rhythmCycler();
      rhythmTwo.rhythmCycler();
      
      
//draws rhythm in
      let animationArrayOne = rhythmOne.rhythmAnimatorL();
      for (let i = 0; i < animationArrayOne.length; i++){
        let coloration1 = color(animationArrayOne[i],animationArrayOne[i],animationArrayOne[i]);
        display.setPixel(i, coloration1);
      }
      let animationArrayTwo = rhythmTwo.rhythmAnimatorR();
      for (let i = 0; i < animationArrayTwo.length; i++){
        let coloration2 = color(animationArrayTwo[i],animationArrayTwo[i],animationArrayTwo[i]);
        display.setPixel(i+13, coloration2);
      }
      
//drawer player location    
    display.setPixel(playerOne.position, playerOne.playerColor);
    display.setPixel(playerTwo.position, playerTwo.playerColor);

//color glow on press
      if(playerOne.glowCheck()){
          //print(rhythmOne.activeBeat);
          if(rhythmOne.activeBeat){
            display.setPixel(playerOne.position-3, color(50,0,0));
            display.setPixel(playerOne.position-2, color(100,0,0));
        display.setPixel(playerOne.position-1, color(150,0,0));
      }else{
        //print(rhythmOne.activeBeat);
        display.setPixel(playerOne.position-2, color(20,20,20));
        display.setPixel(playerOne.position-1, color(40,40,40));
      }
                        
    }

    if(playerTwo.glowCheck()){
      //print(rhythmOne.activeBeat);
      if(rhythmTwo.activeBeat){
        display.setPixel(playerTwo.position+3, color(50,50,50));
        display.setPixel(playerTwo.position+2, color(100,100,0));
    display.setPixel(playerTwo.position+1, color(150,150,0));
  }else{
    //print(rhythmTwo.activeBeat);
    display.setPixel(playerTwo.position+2, color(20,20,20));
    display.setPixel(playerTwo.position+1, color(40,40,40));
  }
                    
}
}
}

    function keyPressed() {
        if (key == "s" || key == "S") {
          playerOne.glow();
        }
        if (key == "k" || key == "K") {
          playerTwo.glow();
        }
        
      }//some press to check varable (press/time elapsed) --> look at millis

