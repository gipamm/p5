let canvasWidth = 800;
let canvasHeight = 600;
let margin = 20;
let count = 36;
let delta = (Math.min(canvasWidth, canvasHeight) - margin * 2) / count;
let canvasPaddingX = (canvasWidth - delta * count) / 2 - margin;
let canvasPaddingY = (canvasHeight - delta * count) / 2 - margin;
let Dots = [];

class Dot {
    constructor(x, y, r) {
        this.dotX = x;
        this.dotY = y;
        this.dotR = r;
    }
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    noStroke();
    background(255);
    fill(0);
    background(255);
    for (let row = 0; row < count; row++) {
        Dots[row] = [];
        let py = (row + 2) * delta + canvasPaddingY;
        for (let col = 0; col < count; col++) {
            let px = (col + 2) * delta + canvasPaddingX;
            let rand = Math.round(random(1.1) * 4);
            Dots[row][col] = new Dot(px, py, (rand / 4) ** 2 * delta);
        }
    }
}

function draw() {
    background(255);
    for (let row = 0; row < count; row++) {
        for (let col = 0; col < count; col++) {
            ellipse(Dots[row][col].dotX, Dots[row][col].dotY, Dots[row][col].dotR, Dots[row][col].dotR);
        }
    }
}