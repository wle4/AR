// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro;

// where our player is current hanging out at
var playerX, playerY;

// artwork for our player
var playerArtwork;

// a bunch of coins
var coins = [];

// points
var points = 0;

// this is a major hack, but if you plan on using getScreenPosition on a mobile device you have to load an image or other media file here
// the reason has to do with the fact that the AR.js camera system takes some time to initialize, and this process pauses while the user
// is providing their consent to turn on their camera via a pop-up box.  however, p5 will continue executing behind the scenes and will set
// up its end of the AR world wtihout AR.js.  using 'preload' will pause p5's startup routine until after the user clicks to allow access to
// their camera, thus bringing the system back into balance.
// as mentioned, this is a hack, but I'm working on fixing it for the next version of the library!
function preload() {
  loadImage('images/player.png');
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');

}


function draw() {

 
  //world.clearDrawingCanvas(); //<-- UNCOMMENT THIS LINE TO CLEAR CANVAS BETWEEN FRAMES
  // use the markers as positional controllers
  if (markerHiro.isVisible() == true) {
    // get the position of this marker
    var hPos = markerHiro.getScreenPosition();
    //draw black ellipse on marker
    r = random(500)
    g = random(500)
    b = random (500)
    fill(r,g,b)
    //ellipse(hPos.x, hPos.y, 50);
    rect(hPos.x, hPos.y, 50, 50);
  
  }

}
