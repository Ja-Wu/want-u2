function setup(){
    createCanvas(600,600);
    background(255);

    let points = [];
    fill(0,0,0,0);
    stroke(0,0,0,20);

    for(let i=0; i<50; i+= 1){
        // [x-position, y-position, radius, y-change]
        points.push([Math.round(random(0,width)), height/2, Math.round(random(2,40)), Math.round(random(-6,6))]);
    }


    for(let i=0; i<35; i += 1){
        for(let j=0; j<points.length; j += 1){
            let c1 = points[j];
            c1[1] += c1[3];

            for(let k=0; k<j; k+=1){
                let c2 = points[k];
                let distance = (c1[0] - c2[0])**2 + (c1[1] - c2[1])**2;
                if((c1[2]-c2[2])**2 < distance && (c2[2] + c2[2])**2){
                    let AB0 = c2[0] - c1[0];
                    let AB1 = c2[1] - c1[1];
                    let c = Math.sqrt(AB0**2 + AB1**2);
                    let x = (c1[2]**2 + c**2 - c2[2]**2)/(2*c2[2]);
                    let y = c1[2]**2 - x**2;
                    if(y > 0){y=Math.sqrt(y);}

                    let ex0 = AB0 / c;
                    let ex1 = AB1 / c;
                    let ey0 = -ex1;
                    let ey1 = ex0;
                    let Q1x = c1[0] + x * ex0;
                    let Q1y = c1[1] + x * ex1;

                    let Q2x = Q1x - y * ey0;
                    let Q2y = Q1y - y * ey1;
                    Q1x += y * ey0;
                    Q1y += y * ey1;
                    line(Q1x, Q1y, Q2x, Q2y);
                }
            }

            if(c1[1] < -40 || c1[1] > height+40){
                c1 = [Math.round(random(0,width)), height/2, Math.round(random(2,40)), Math.round(random(-6,6))];
            }
            points[i] = c1;
        }
    }
}