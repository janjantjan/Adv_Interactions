/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Advanced Interactions
  March 1st
  Janice Tjan

*/ /////////////////////////////////////

// Sketch.js sets up the window of the game.

let displaySize = 34;   // how many pixels are visible in the game
let pixelSize = 20;     // how big should they look on screen

let startPool = 17;
let startOne = 5;
let startTwo = 29;

let playerOne;    // Left one
let playerTwo;      //Right one
let whirl;    

let display;      // Aggregates our final visual output before showing it on the screen
let controller;   // This is where the state machine and software logic lives
let collisionAnimation;   // Where we store and manage the collision animation
let score;        // Where we keep track of score and winner



function setup() {

  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display

  playerOne = new Player(color(255,0,0), startOne);   // Initializing player
  playerTwo = new Player(color(255,255,0), startTwo);    
  whirl = new Whirlpool(color(140,188,185), startPool);    // Initializing whirl_center using the Player class --> changed to light blue

  collisionAnimation = new Animation();     // Initializing animationS

  controller = new Controller();            // Initializing controller

  score = {max:3, winner:color(0,0,0)};     // score stores max number of points, and color ... keep the best of three I guess :P
  
}

function draw() {

  //  a blank screen
  background(0, 0, 0);    

  // Runs state machine at determined framerate 
  controller.update();

  // After we've updated our states, we show the current one 
  display.show();


}


