var nman, nmanleft, nmanright, bg1, ground;

function preload() {

  nmanleft = loadAnimation("left1.png", "left2.png")
  nmanright = loadAnimation("right1.png", "right2.png")
  bg1 = loadImage("forest.png")

}

function setup() {
  createCanvas(1200, 800);
  nman = createSprite(600, 700, 50, 50);
  nman.addAnimation("right", nmanright);
  nman.addAnimation("left", nmanleft);
  nman.scale = 0.2
  ground = createSprite(600, 750, 1200, 20);
  ground.visible = false;

}

function draw() {
  background(bg1);
  if (keyDown("left")) {

    nman.changeAnimation("left", nmanleft);
    nman.x = nman.x - 10;
  }

  if (keyDown("right")){
    nman.changeAnimation("right", nmanright)
    nman.x = nman.x + 10;
  }

  nman.collide(ground);
  drawSprites();
}