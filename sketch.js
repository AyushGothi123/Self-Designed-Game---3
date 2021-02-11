var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;


var player, form,game;
var player1,player2;
var players;
var playerImg;
var supplies;
var supplyGroup;
var appleImg, bananaImg, milkImg, breadImg;

var player1Score = 0;
var player2Score = 0;

function preload(){

  playerImg = loadImage("images/Box.jpg")
backImg = loadImage("images/background.jpg")
breadImg = loadImage("images/Bread.png")
milkImg = loadImage("images/Milk.jpg")
bananaImg = loadImage("images/banana2.png")
appleImg = loadImage("images/apple2.png")

supplyGroup = new Group();

}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  player1 = createSprite(200,500);
  player1.addImage("player1",playerImg);
  player1.scale = 0.1;
  
  player2 = createSprite(800,500);
  player2.addImage("player2", playerImg);
  player2.scale = 0.1;

 
  
}

function draw(){
background(backImg)

if (playerCount === 2) {
  game.update(1);
}
if (gameState === 1) {
  clear(); 
  game.play();
}
if (gameState === 2) {
 
  game.end();
}

  

  drawSprites();
}