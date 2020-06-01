var ball;
var track;
// var ObstaclesGroup = createGroup();
// var database,position;

function preload(){
   track = loadImage("Images/track.jpg");;
   
}

function setup(){
    createCanvas(2000,1000);
    // database = firebase.database();
   ball = createSprite(250,480,20,10);

  ball.shapeColor = "red";

//   var location = database.ref("ball/position");
//   location.on("value",readon,showerror);
}
function draw(){
    background(255);
    // track = createSprite(200,200,10,10);
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
 ball.position.x = mouseX;
 camera.position.x = displayWidth/2;
 camera.position.y = ball.y;
// ball.position.y = mouseY;
    
if(keyDown(UP_ARROW)){
  ball.distance +=10
   ball.velocity.y = -3;
    ball.velocity.x = 0;
  }
  // if(keyIsDown(DOWN_ARROW)){
  //   ball.velocity.y = 3;
  //    ball.velocity.x = 0;
  //  }
  //  if(keyIsDown(RIGHT_ARROW)){
  //   ball.velocity.y = -4;
  //    ball.velocity.x = 4;
  //  }
//  ball.addImage("car2",ball);
//    if(keyIsDown(LEFT_ARROW)){
//     ball.velocity.y = -5;
//      ball.velocity.x = 3;
//    }
// spawnObstacles();
    drawSprites();
}

// function writePosition(x,y){
//     database.ref("ball/position").set({
//         x:ball.x +x,
//          y:ball.y +y

//     })
// }
// function showerror(){
//     console.log(error);
// }


// function mouseReleased(){
//     strokeWeight(0);
// }

// function readon(data){
//     position = data.val()
//     ball.x = position.x ;
//     ball.y = position.y ;
    
//     }

// function spawnObstacles() {
//   if(World.frameCount % 60 === 0) {
//     var obstacle = createSprite(400,365,10,40);
   
//     var rand = randomNumber(1,6);
//     obstacle.setAnimation("obstacle" + rand);
//     obstacle.scale = 0.5;
//     obstacle.lifetime = 70;
//     ObstaclesGroup.add(obstacle);
//   }
// }