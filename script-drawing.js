let sure;
let can;
function setup() {
  can = createCanvas(1100, 600);
  background("pink");
}

function draw() {
  fill(1000, 1000, 1000);
  rect(100, 0, 900, 100);
  fill(10000000, 0, 0);
  rect(0, 500, 100, 100);
  fill(0, 0, 0);
  rect(1000, 500, 100, 100);
  fill(0, 0, 0);
  line(100, 50, 1000, 50);
  line(550, 0, 550, 100);
  noFill();
  ellipse(mouseX, mouseY, 5, 5);
}

function mousePressed(){
  if (mouseY < 100){
    if (mouseX > 100){
      if (mouseX < 1000){
        sure = window.prompt("are you sure ? ( y/n )");
        if(sure == "y" ){
          background("pink");
        }
        if(sure == "Y" ){
          background("pink");
        }
      }
    }
  }
  
  if (mouseY > 100){
    if (mouseY < 500){
      stroke("pink");
      fill("pink");
      ellipse(mouseX, mouseY, 50, 50);
      fill(0, 0, 0);
      stroke(0, 0, 0);
    }
  }

  if (mouseY > 400){
    if (mouseX < 100){
      stroke(1000000, 0, 0);
    }
  }

  if (mouseY > 400){
    if (mouseX > 1000){
      stroke(0, 0, 0);
    }
  }
}
