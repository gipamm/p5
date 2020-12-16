const kTIn = 0.007,
    kAIn = 0.027,
    randK = .5,
    bOffset = 500,
    tr = 5000,
    fade = 2,
    fRate = 100;

const randomise = (k) => {
    return k * (Math.random() + randK);
}

let kT = randomise(kTIn),
    kA = randomise(kAIn),
    f = 0,
    dAlpha = Math.random() * Math.PI * 2;

const s = (p) => {
    let t = Date.now();

    p.setup = function () {
        p.background(0);
        p.clear();
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB, 100);
        p.stroke(0, 100, 0, 10);
        p.frameRate(fRate);
        p.canvas.style.transitionDuration = fade + "s";
        p.canvas.style.transitionProperty = "opacity";
    }

    p.draw = function () {
        f++;
        if (f === tr) {
            p.canvas.style.opacity = "0";
        } else if (f === tr + fade * fRate) {
            p.clear();
            p.canvas.style.opacity = "1";
            kT = randomise(kTIn);
            kA = randomise(kAIn);
            f = 0;
            dAlpha = p.random(Math.PI * 2);
        }
        if (t > bOffset) {
            dLine(t - bOffset, kT, kA, 0);
        }
        dLine(t, kT, kA, 1);
        t++;
    }

    function dLine(tm, kt, ka, cc) {
        let t = tm * kt;
        let alpha = tm * ka + dAlpha;
        let cx = Math.sin(t * 3 + dAlpha);
        let cy = Math.cos(t * 2 + dAlpha);

        let dx = p.windowWidth / 2 + 400 * cy * cy * cx;
        let dy = p.windowHeight / 2 + 400 * cx * cx * cy;

        let ll = Math.sin(t) * 200;
        let x = ll * Math.cos(alpha);
        let y = ll * Math.sin(alpha);


        let c = (t * 100) % 100;
        let r = Math.sin(t * 10);
        let b = Math.abs(r) * 100;
        if (cc) {
            p.blendMode(p.ADD);
            p.stroke(c, 100, b, 10);
        } else {
            p.blendMode(p.MULTIPLY);
            p.stroke(0, 100, 0, 20);
        }

        p.line(dx - x, dy - y, dx + x, dy + y);
    }
}

let p5Ins = new p5(s);

