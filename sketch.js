function setup () {
  createCanvas(windowWidth,windowHeight);
}

let rot = 0;
function draw() {
  background(255, 255, 255); 
  translate(width/2, height/2);
  rectMode(CENTER);
  
  for (let i=0; i<30; i++) {
    rotate(radians((mouseX-width/2)*0.008 + rot));
    fill(200-i*20, 100+i*3, 255-i*10, 100);
    noStroke();
    
    let d = 300 - i*9;
    beginShape();
    for (let j=0; j<=360; j++) {
       let d2 = d + (130-i)*cos(radians(j*10))
       let x = d2*cos(radians(j*2));
       let y = d2*sin(radians(j*2));
       vertex(x, y);
    }
    endShape(CLOSE);
  }
  rot = rot + 0.1;
}
