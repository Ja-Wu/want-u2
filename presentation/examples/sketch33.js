let r1Slider;
let r2Slider;
let freq1Slider;
let freq2Slider;
let numSlider;
let offsetSlider;

function setup(){
    let len = min(windowHeight, windowWidth);
    len = Math.floor(len/100) * 100;
    createCanvas(len, len);
    background(0);

    r1Slider = createSlider(100, 300, 200, 5);
    r2Slider = createSlider(-100, 150, 50, 5);

    freq1Slider = createSlider(0, 12, 0, 0.5);
    freq2Slider = createSlider(0, 12, 0, 0.5);

    numSlider = createSlider(10,100, 40, 2);
    offsetSlider = createSlider(0, PI, 0, PI/32);

    r1Slider.position(20, 20);
    r2Slider.position(20, 40);
    freq1Slider.position(20, 60);
    freq2Slider.position(20, 80);
    numSlider.position(20,100);
    offsetSlider.position(20,120);

    r1Slider.style('width', (windowWidth/5) + 'px');
    r2Slider.style('width', (windowWidth/5) + 'px');
    freq1Slider.style('width', (windowWidth/5) + 'px');
    freq2Slider.style('width', (windowWidth/5) + 'px');
    numSlider.style('width', (windowWidth/5) + 'px');
    offsetSlider.style('width', (windowWidth/5) + 'px');
}

function draw(){
    background(0);
    stroke(255);
    strokeWeight(2);

    let r1 = r1Slider.value();
    let r2 = r2Slider.value();
    let freq1 = freq1Slider.value();
    let freq2 = freq2Slider.value();
    let numOfLines = numSlider.value();
    let offset = offsetSlider.value();

    offset *= numOfLines;

    translate(width/2, height/2);
    for(let i=0; i<numOfLines; i += 1){
        let phi = i*TWO_PI/(numOfLines)
        let x = Math.sin(phi);
        let y = Math.cos(phi);

        let r3 = r2 * (Math.sin(freq1/numOfLines *(PI * i + offset)) + Math.cos(freq2/numOfLines *( PI * i + offset))) + r1;

        line(r1*x, r1*y, r3*x, r3*y);
    }
}