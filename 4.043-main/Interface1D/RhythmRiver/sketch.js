/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Advanced Interactions
  March 1st
  Janice Tjan

*/ /////////////////////////////////////

// Sketch.js sets up the window of the game.

let displaySize = 35;   // how many pixels are visible in the game
let pixelSize = 20;     // how big should they look on screen
var millis_start = 0;
let startPool = 17;
let startOne = 4;
let startTwo = 30;

let playerOne;    // Left one
let playerTwo;      //Right one
let whirl;    

let display;      // Aggregates our final visual output before showing it on the screen
let controller;   // This is where the state machine and software logic lives
let collisionAnimation;   // Where we store and manage the collision animation
let whorlAnimation;
let score;        // Where we keep track of score and winner



function setup() {
  
  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display
 
  playerOne = new Player(color(255,0,0), startOne, -1);   // Initializing player
  playerTwo = new Player(color(255,255,0), startTwo, 1);    
  whirl = new Whirlpool(color(140,188,185), startPool);    // Initializing whirl_center using the Player class --> changed to light blue

  collisionAnimation = new Animation(12, 34, color(255,255,0));     // Initializing animations << make a new animation ... lamo janice why you torture yourself like this?
  whorlAnimation = new Animation(12, 30, color(140,188,185));
  controller = new Controller();            // Initializing controller

  score = {max:3, winner:color(0,0,0)};     // score stores max number of points, and color ... keep the best of three I guess :P
  
}

function draw() {

  frameRate(120); // 120fps
  //  a blank screen
  background(0, 0, 0);    
  // Runs state machine at determined framerate 
  controller.update();
  // After we've updated our states, we show the current one 
  display.show();



}


