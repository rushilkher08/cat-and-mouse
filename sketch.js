var mouse1, mouse2, mouse3;
var cat1,cat2,cat3,cat4;
var greenImg;
var tom1, jerry1

function preload() {

    mouse1 = loadAnimation("images/jerryOne.png");
    mouse2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png")
    mouse3 = loadAnimation("images/jerryFour.png")

    cat1 = loadAnimation("images/tomOne.png");
    cat2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    cat4 = loadAnimation("images/tomFour.png");

    greenImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,1000,800);
    garden.addImage("bg",greenImg);
    garden.scale = 1;



    jerry1 = createSprite(300,500,5,5);
    
    jerry1.addAnimation("run",mouse1);
    jerry1.addAnimation("jerry_happy", mouse3)
    jerry1.addAnimation("jerry_teasing", mouse2)
    jerry1.scale = 0.1 

    

    tom1 = createSprite(800,500,5,5);
    tom1.addAnimation("chase",cat1);
    tom1.addAnimation("hi",cat2)
    tom1.addAnimation("tom_sad",cat4)
    tom1.scale = 0.2

    
}


function draw() {

    background("black");

    if(isTouching(tom1,jerry1)){

        tom1.velocityX = 0
        tom1.changeAnimation("tom_sad", cat4)
        
        
        jerry1.changeAnimation("jerry_happy")

    }

    tom1.depth = garden.depth
    tom1.depth = garden.depth+1

  //  jerry1.depth = garden.depth
  //  jerry1.depth = garden.depth+1 
   
    drawSprites();
}

function keyPressed(){

    if(keyCode===37){
      
        tom1.velocityX = -3;
        tom1.changeAnimation("hi",cat2);
 
        jerry1.changeAnimation("jerry_teasing");
    
    }

}

function isTouching(a,b){

if(a.x - b.x < a.width/2 + b.width/2){

    return true 
}
else{

return false

}
}