let points = [];
let horizontal;
let vertical;
let space;

function setup(){
    let len = min(windowHeight, windowWidth) - 50;
    len = Math.floor(len/50) * 50;
    createCanvas(len, len);
    background(0);
    stroke(255);

    space = 20;

    horizontal = [
        [-1,-1,height],     // [Ax, Ay, By] with Bx === Ax
        [width,-1,height]
    ];
    vertical = [
        [-1,-1,width],      // [Ax, Ay , Bx] with By === Ay
        [-1,height,width]
    ];

    for(let y = space; y <= height-space; y += space){
        for(let x = space; x <= width-space; x += space){
            points.push([x,y]);
        }
    }
}

function draw(){
    // pick a random point
    let p = points[int(random(0, points.length))];

    // choose to draw a vertical or horizontal line
    if(frameCount % 2 === 0){
        // draw a vertical line

        let minS = width;
        let maxS = -width;

        for(let i=0; i<horizontal.length; i+=1){
            let hPoint = horizontal[i];
            if(p[1] > hPoint[1] && p[1] < hPoint[2]){
                let s = hPoint[0] - p[0];

                if(s < 0 && s > maxS){
                    maxS = s;
                } else if(s > 0 && s < minS){
                    minS = s;
                }
            }
        }

        let x1 = p[0] + maxS;
        let x2 = p[0] + minS;
        let y = p[1];
        line(x1 + space/2, y, x2 - space/2, y);
        vertical.push([x1,y,x2]);

        for(let i=0; i<points.length; i+=1){
            if(points[i][1] === y){
                if((points[i][0] - x1) * (points[i][0] - x2) < 0){
                    points.splice(i, 1);
                    i-=1;
                }
            }
        }
    } else {
        // draw a horizontal line

        let minR = height;
        let maxR = -height;

        for(let i=0; i<vertical.length; i+=1){
            let vPoint = vertical[i];
            if(p[0] > vPoint[0] && p[0] < vPoint[2]){
                let r = -p[1] + vPoint[1];
                if(r < 0 && r > maxR){
                    maxR = r;
                } else if(r > 0 && r < minR){
                    minR = r;
                }
            }
        }

        let x = p[0];
        let y1 = p[1] + maxR ;
        let y2 = p[1] + minR ;
        line(x, y1 + space/2, x, y2 - space/2);
        horizontal.push([x,y1,y2]);

        for(let i=0; i<points.length; i+=1){
            if(points[i][0] === x){
                if((points[i][1] - y1) * (points[i][1] - y2) < 0){
                    points.splice(i, 1);
                    i-=1;
                }
            }
        }
    }

    if(points.length < 200){
        fill(255);
        points.forEach(p => {
            ellipse(p[0], p[1], 5);
        });
        noLoop();
    }
}