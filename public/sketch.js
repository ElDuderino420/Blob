let blob;
let map;
let zoom = 1.0;
let angle;

function setup() {
  // put setup code here
  createCanvas(1000, 600)
  $('#join').hide();
  //background(51);

  blob = new Blob('fdas', width/2, height/2);
  map = new Map(1000,1000);
  angle = createVector(0, 0);
}

function draw() {
  background(51);

  let a = createVector(width/2 - width/2*zoom, height/2 - height/2*zoom);
  let m = p5.Vector.sub(createVector(mouseX, mouseY), blob.location);
  m.limit(5);
  
  angle = p5.Vector.lerp(angle, a);
  //angle.sub(m);
  //translate(blob.location.x, blob.location.y);
  translate(angle.x, angle.y);
  //console.log(-width/2 + width/2*zoom)
  scale(zoom);
  map.move();
  map.show();

  blob.move();
  blob.show();

  
  
  // put drawing code here
}

function mouseWheel(event) {
  zoom += 0.0001 * event.delta;
  //zoom = constrain(zoom, zMin, zMax);
  return false;
}




