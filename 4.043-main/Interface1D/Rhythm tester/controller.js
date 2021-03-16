
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        
        
    }    

    update() {
        
             
      display.clear();
      //new pixel gets put at 1, next pixel is shifted to 2. 

      let pixelNow = rhythmOne.rhythmCycler(); //refreshes the index to call
      print(pixelNow + "currentPix");

      
        for (let i = 0; i<pixelNow+1; i++){
            if (i<20){
                display.setPixel(i, rhythmOne.grabPixel(pixelNow-i+1));
                print(rhythmOne.grabPixel(pixelNow-i+1));
            }
            else {
                display.setPixel(i, color(0,0,0));
            }
    
                        
    }
}
}