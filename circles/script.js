function setup(){
    createCanvas(500,500);
    background(255);
    stroke(0,0,0);
    noFill();
}

function draw(){
    recCircle(250, 250, 250, 1);
}

function recCircle(cx, cy, r, level){
    circle( cx, cy, r * 2);
    if (level < 12){
        recCircle(cx - r/2, cy, r/2, level+1);
        recCircle(cx + r/2, cy, r/2, level+1);
    }
}