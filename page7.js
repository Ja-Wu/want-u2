// create audio context
var audioContext = new (window.AudioContext || window.AudioContext)();

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


// start oscillator
oscillator.start();

// when user clicks button, play random melody
document.querySelector('#play-button').addEventListener('click', function() {
  // create random melody array
  var melody = [];
  const len = Math.floor(Math.random()*20) + 10;
  for (var i = 0; i < len; i++) {
    melody.push(Math.floor(Math.random() * 12));
  }
  gainNode.gain.value = 0.2;
  // play melody
  var time = audioContext.currentTime;
  for (var i = 0; i < melody.length; i++) {
    oscillator.frequency.setValueAtTime(Math.floor(350 * Math.pow(2, melody[i] / 10)), time + i * 0.25);
  }
  setTimeout(() => {gainNode.gain.value = 0}, melody.length*275);
});
