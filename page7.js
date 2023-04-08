// create audio context
var audioContext = new AudioContext();
var canvas;

// create oscillator and gain nodes
var oscillator = audioContext.createOscillator();
var gainNode = audioContext.createGain();

gainNode.gain.value = 0;

// connect oscillator to gain and gain to audio context
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

// set oscillator and gain properties
oscillator.type = 'sine';
oscillator.frequency.value = 440;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(10);
}

// start oscillator
oscillator.start();

// when user clicks button, play random melody
document.querySelector('#play-button').addEventListener('click', function() {
  // create random melody array
  var melody = [];
  const len = Math.floor(Math.random()*20) + 10;
  for (var i = 0; i < len; i++) {
    melody.push(Math.random());
  }
  gainNode.gain.value = 0.2;
  // play melody
  var time2 = audioContext.currentTime;
  for (var i = 0; i < melody.length; i++) {
    oscillator.frequency.setValueAtTime(Math.floor(300 * Math.pow(2, melody[i])), time2 + i * 0.25);
  }
  setTimeout(() => {gainNode.gain.value = 0;}, melody.length * 275);
  // draw circles at tone intervalls
  for (var i = 0; i < melody.length; i++) {
    setTimeout(()=>{
      fill(random(255), random(255), random(255));
      let scale = random(1, 25);
      let x = random(windowWidth);
      let y = random(windowHeight);
      for(let j=0; j<25; j++){
        setTimeout(()=>{ellipse(x, y, scale*j);}, j*10);
      }
    }, i*250);
  }
});
