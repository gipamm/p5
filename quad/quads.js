let qw = 800;
let k = 1.2;
let e = .15;
let minW = 2;
let l = 2;

function setup() {
    createCanvas(800, 800);
    background(0);
    stroke(255);
    randomSeed(Date.now());
}

function draw() {
    quads(0, 0, 1);
    frameRate(random(2) + 1);
}

function quads(x, y, level) {
    fill(round(random(1) / k) * 255);
    let w = qw / level;
    if (w > minW && (random(1) > e || level <= 4)) {
        rect(x, y, w, w);
        let dc = w / 2;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                quads(x + i * dc, y + j * dc, level * 2);
            }
        }
    }
}