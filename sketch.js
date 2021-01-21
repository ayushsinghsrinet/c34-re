var canvas
var dog,dogimg,happydog;
var food
var foodata
var database
var backimg
var walk;
var dogwalk
var milk,milkimg;
var dogsleep,dogsleepimg;
var dogsound
function preload(){
    dogimg=loadAnimation("Dog.png")
    backimg=loadImage("backimg.jpg")
    happydog=loadImage("happydog.png")
    walk=loadAnimation("dogwalking (1) (1).png","dogwalking (1)3.png","dogwalking2.png")
    milkimg=loadImage("bone.png")
    dogsleepimg=loadImage("dogsleep.png")
    dogsound=loadSound('dogsound.mp3')
}
function setup(){
 canvas=createCanvas(1000,600)

 database=firebase.database()
dog=createSprite(500,400,10,10)
dog.addAnimation("dogimg",dogimg)
dog.scale=0.3

dogwalk=createSprite(500,400,10,10)
dogwalk.addAnimation("dog",walk)
dogwalk.scale=0.3
dogwalk.visible=false

milk=createSprite(300,500,10,10)
milk.addImage(milkimg)
milk.scale=0.4

dogsleep=createSprite(800,500,10,10)
dogsleep.addImage(dogsleepimg)
dogsleep.scale=0.3;
dogsleep.visible=false

    foodata=database.ref('Food');
    foodata.on("value",readStock);

}
function draw(){
    background(backimg)
    if(keyDown("space")){
        dogwalk.x=500
        dogwalk.velocityX=-8
        dogwalk.scale=0.5;
        dogwalk.visible=true
        dog.visible=false
        milk.visible=false
        dogsleep.visible=false
        dogsound.play()
     }
    if(keyWentDown("up")){
        writeStock(food)
        dogsleep.visible=false
        milk.visible=false
        dog.visible=true
        dog.addImage(happydog)
        dogsound.play()
    }
if(keyWentUp("up")){
    milk.visible=true
}
if(keyWentDown("down")){
    dogsleep.visible=true
    dogwalk.visible=true
    dog.visible=false
    milk.visible=false
}

    drawSprites()
    textSize(20)
    fill("green")
    text("Press Up Arrow Only To Feed Dog ",400,50)
    textSize(20)
    text("Food remaining:"+food,30,50)
}
function readStock(data){
    food=data.val()
    
}
function writeStock(x){
    if(x<=0){
        x=0;
       
      }else{
        x=x-1;
      } 
    database.ref("/").update({
        Food:x
    })
}