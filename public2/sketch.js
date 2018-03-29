let blob;
let zoom = 1.0;
var zMin = 0.05;
var zMax = 9.00;
var sensativity = 0.0001;


let map;
let mapsize = 400;

function setup() {
  // put setup code here
  createCanvas(1500, 600)
  //background(51);

  map = new Map(mapsize);
  
  //joingame();
  
  
  noLoop();
}

function draw() {
  
  
  background(255);
  map.show();
  map.move();
  
  blob.move();
  blob.show();
  
  // put drawing code here
}

function keyPressed() {
  //map.move();
}

function mouseWheel(event) {
  console.log('zooming')
  zoom += sensativity * event.delta;
  console.log(event.delta)
  zoom = constrain(zoom, zMin, zMax);
  //blob.setposition();
  //uncomment to block page scrolling
  return false;
}

function joingame() {
  
  let name = $('#nickname').val();
  console.log(name)
  $('#join').hide();

  blob = new  Blob(name, width/2, height/2);
  loop();
}

