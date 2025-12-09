var bluecolor = 0;
function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  background(0, 0, bluecolor);
}

function randomBlue(){
  bluecolor = random (255);

}
