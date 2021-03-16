/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Advanced Interactions
  March 1st
  Janice Tjan

*/ /////////////////////////////////////

// Sketch.js sets up the window of the game.

let displaySize = 13;   // how many pixels are visible in the game
let pixelSize = 20;     // how big should they look on screen
var millis_start = 0;
let rhythmUno = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let startOne = 12;

function setup() {
  
  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display
  rhythmOne = new Rhythm(60, 2, rhythmUno);
  playerOne = new Player(color(255,0,0), startOne);
  controller = new Controller();  
  
  
}

function draw() {

  frameRate(30); // 120fps
  //  a blank screen
  background(0, 0, 0);    
  // Runs state machine at determined framerate 
  controller.update();
  // After we've updated our states, we show the current one 
  display.show();



}


