let steps = 400;

function setup(){
    createCanvas(windowWidth - 100, windowHeight - 100);
    background(0);
    noFill();
    strokeWeight(2);

    let x;
    let y;

    x = int(random(-200, -50));
    y = int(random(0,height));
    let lastPoint = [x,y];

    x = int(random(-50, 50));
    y = int(random(0,height));
    let newControlPoint = [100,100];

    let c1 = color(random(255), random(255), random(255), 16);
    let c2;
    let alpha;

    let points = [lastPoint, newControlPoint];
    let segments = int(random(2,6));
    if(segments < 4){
        alpha = 32;
        steps = 700;
    } else {
        alpha = 16;
    }

    for(let j=0; j<segments; j++){
        c2 = color(random(255), random(255), random(255), alpha);

        // new Control-Point
        x = int(random(j*width/(segments-1), (j+1)*width/(segments-1)) + random(-50,50));
        y = int(random(0,height));
        points.push([x,y]);
        
        // new Point
        x = int(random(j*width/(segments-1), (j+1)*width/(segments-1)) + random(-50,50));
        y = height/2 + int(random(-100,100))
        points.push([x,y]);
        
        for(let i=0; i<steps; i++){
            let t = i/steps;
            let p = layer(points, t);
            
            let c = lerpColor(c1, c2, t);
            stroke(c);

            ellipse(p[0], p[1], 200);
        }

        lastPoint = points[points.length-1];
        let lastControlPoint = points[points.length-2];
        newControlPoint = [2*lastPoint[0] - lastControlPoint[0], 2*lastPoint[1] - lastControlPoint[1]];

        points = [lastPoint, newControlPoint];
        c1 = c2;
    }
}

function layer(arr, t){
    if(arr.length === 1){
        return arr[0];
    } else {
        let newArr = [];
        for(let i=0; i<arr.length-1; i++){
            let a = arr[i];
            let b = arr[i+1];

            let x = a[0] + t * (b[0] - a[0]);
            let y = a[1] + t * (b[1] - a[1]);

            newArr.push([x, y]);
        }
        return layer(newArr, t);
    }
}