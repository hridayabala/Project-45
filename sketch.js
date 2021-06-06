var kid, coin, bag;
var kidImage, coinImage, bagImage;
var background, backgroundImage;

function preload(){
  kidImage = loadAnimation("images/kid.png");
  coinImage = loadImage("images/coin.png");
  bagImage = loadImage("images/bag.png");

  backgroundImage = createImg("images/background.gif");

}

function setup(){
  createCanvas(600, 600);

  //kid = createSprite(500, displayHeight/2 + 75, 30, 30);
  //kid.addAnimation(kidImage);
  //kid.scale = 0.1;
  //kid.velocityX = 5;
  image(kidImage, 50, 300);


}

function draw(){
  background(backgroundImage);

  drawSprites();

}