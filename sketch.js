var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var allPlayers;

var car1, car2, carImage1, carImage2, trackImage, track;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  carImage1 = loadImage("assets/car1.png");
  carImage2 = loadImage("assets/car2.png");
  trackImage = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.updateState(1)
  }

  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
