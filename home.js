let frame = 0;

function setup(){
  createCanvas(400, 80);
}

function draw(){
  text("Noah's Projects", 0, sin(frame/10));
  frame++;
}
