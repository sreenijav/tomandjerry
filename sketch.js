var backgroundImg
var cat1Img, cat2Img
var mouse1Img, mouse2Img
var cat, mouse
var background


function preload() {
    //load the images here
backgroundImg=loadAnimation("garden.png")
cat1Img=loadAnimation("cat1.png","cat2.png")
cat2Img=loadAnimation("cat3.png", "cat4Img")
mouse1Img=loadAnimation("mouse1.png","mouse2.png")
mouse2Img=loadAnimation("mouse3.png","mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse.createSprite(700,600)
mouse.addAnimation("mouse",mouse1Img)
cat.addAnimation("cat",cat1Img)
background.createSprite(500,400)
background.addAnimation("bg",backgroundImg)
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
if(keyDown("LEFT_ARROW")){
    mouse.addAnimation("mouse2",mouse2Img)
    mouse.changeAnimation("mouse2");
    mouse.frameDelay=25
}
if(keyDown("RIGHT_ARROW")){
    cat.addAnimation("cat2",cat2Img)
    cat.changeAnimation("cat2");
    cat.velocityX=5
}
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.changeAnimation("cat1",cat1Img)
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
