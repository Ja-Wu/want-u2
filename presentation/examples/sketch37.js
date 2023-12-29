let steps = 400;

function setup(){
    createCanvas(windowWidth - 100, windowHeight - 100);
    background(0);
    colorMode(HSL, 360, 100, 100, 255);

    let hue1 = int(random(0,360));
    let hue2 = int(random(0,360));
    let c1 = color(hue1, 100, 50, 16);
    let c2 = color(hue2, 100, 50, 16);

    let points = [];
    let numOfPoints = int(random(3,18));
    for(let i=0; i<numOfPoints; i++){
        let x = int(random(0,width));
        let y = int(random(0,height))
        points.push([x,y]);
    }

    noFill();
    strokeWeight(2);
    for(let i=0; i<steps; i++){
        let t = i/(steps-1);
        let p = layer(points, t);

        // lerp between hue1 and hue2 based on t
        let c = lerpColor(c1, c2, t);
        stroke(c);
        
        ellipse(p[0], p[1], 100);
    }
}

function layer(arr, t){
    if(arr.length === 1){
        return arr[0];
    } else {
        //stroke(255, 32);
        //strokeWeight(1);
        let newArr = [];
        for(let i=0; i<arr.length-1; i++){
            let a = arr[i];
            let b = arr[i+1];
            
            //line(a[0], a[1], b[0], b[1]);

            let x = a[0] + t * (b[0] - a[0]);
            let y = a[1] + t * (b[1] - a[1]);

            newArr.push([x, y]);
        }
        return layer(newArr, t);
    }
}