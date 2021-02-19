/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Advanced Interactions
  February  18, 2021
  Marcelo Coelho

  If you come from Processing, there is a Processing version here. 
  Keep in mind that there are some differences between both versions:
  https://github.com/marcelocoelho/Interface1D

*/ /////////////////////////////////////


let displaySize = 30;   // how many pixels are visible in the game
let pixelSize = 20;     // how big should they look on screen

let playerOne;    // Adding 2 players to the game
let playerTwo;
let target;       // and one target for players to catch.

let display;      // Aggregates our final visual output before showing it on the screen

let controller;   // This is where the state machine and software logic lives

let collisionAnimation;   // Where we store and manage the collision animation

let score;        // Where we keep track of score and winner



function setup() {

  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display

  playerOne = new Player(color(255,0,0), parseInt(random(0,displaySize)), displaySize);   // Initializing players
  playerTwo = new Player(color(0,0,255), parseInt(random(0,displaySize)), displaySize);

  target = new Player(color(255,255,0), parseInt(random(0,displaySize)), displaySize);    // Initializing target using the Player class 

  collisionAnimation = new Animation();     // Initializing animation

  controller = new Controller();            // Initializing controller

  score = {max:3, winner:color(0,0,0)};     // score stores max number of points, and color 

}

function draw() {

  // start with a blank screen
  background(0, 0, 0);    

  // Runs state machine at determined framerate
  controller.update();

  // After we've updated our states, we show the current one 
  display.show();


}


