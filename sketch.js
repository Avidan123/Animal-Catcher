var game,player,form
var database
var gameState=0
var playerCount=0

function setup() {
  createCanvas(1000,780);
  database=firebase.database()

 game= new Game()
 game.getState()
 game.start()
}

function draw() {
  background(255);  


 /* stroke("yellow")
  strokeWeight(5)
  line(500,0,500,780) */
  drawSprites();
}