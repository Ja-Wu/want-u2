let canvas;
const particles = [];
let bully = false;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    const pLength = floor(windowHeight/20) + floor(windowHeight/20);

    for(let i=0; i<pLength; i++){
        particles.push(new Particle());
    }
}

function draw(){
    mx = mouseX;
    my = mouseY;
    background(0);
    particles.forEach((p, index) => {
        p.update(mx, my);
        p.draw();
        p.connect(particles.slice(index));
    })
    if(bully){
        fill(0,0,0,32);
        circle(mx, my, 200);
    }
}

function mouseClicked(){
    bully = !bully;
}

class Particle{
    constructor(){
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.size = random(2, 6);
    }

    update(mx, my){
        if(bully){
            const d = dist(this.pos.x, this.pos.y, mx, my);
            if(d < 100){
                let scale = 100/d;
                let vector = createVector(this.pos.x - mx, this.pos.y - my);
                let velSize = Math.sqrt(this.vel.x**2 + this.vel.y**2)/d;
                // move particle to new position:
                this.pos.x = mx + (vector.x) * scale;
                this.pos.y = my + (vector.y) * scale;
                // update velocity:
                this.vel.x = vector.x * velSize;
                this.vel.y = vector.y * velSize;
            }
        }
        
        this.pos.add(this.vel);
        if(this.pos.x < 0){
            this.pos.x = 0;
            this.vel.x *= -1;
        } else if(this.pos.x > width){
            this.pos.x = width;
            this.vel.x *= -1;
        }
        if(this.pos.y < 0){
            this.pos.y = 0;
            this.vel.y *= -1;
        } else if(this.pos.y > height){
            this.pos.y = height;
            this.vel.y *= -1;
        }
    }

    draw(){
        noStroke();
        fill(255, 255, 255, 128);
        circle(this.pos.x, this.pos.y, this.size);
    }

    connect(particles){
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if(d < 160){
                stroke(255,255,255,map(d, 80, 160, 64, 0));
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}