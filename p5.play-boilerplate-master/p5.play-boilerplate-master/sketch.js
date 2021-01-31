var fixedRect, movingRect;
var obj1, obj2, obj3, obj4




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,50,30);
  fixedRect.shapeColor = ("green"); 
  movingRect = createSprite(300, 150,30,50);
  movingRect.shapeColor = ("green")
  
  obj1 = createSprite(120,80,50,50);
  obj1.shapeColor = ("green");

  obj2 = createSprite(180,90,50,50);
  obj2.shapeColor = ("green");

  obj3 = createSprite(240,100,50,50);
  obj3.shapeColor = ("green");

  obj4 = createSprite(300,110,50,50);
  obj4.shapeColor = ("green");
}
function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

 if(isTouching(movingRect,obj3)){
  fixedRect.shapeColor = ("red");
  movingRect.shapeColor = ("red");
 }
 else{
  fixedRect.shapeColor = ("green");
  movingRect.shapeColor = ("green");
 }
  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    && obj2.x-obj1.x<obj1.width/2+obj2.width/2
    && obj2.y-obj1.y<obj1.height/2+obj2.height/2
    && obj1.y-obj2.y<obj1.height/2+obj2.height/2){
   return true
    
  }
  else{
    return false
  }

}
