// Create an AudioContext object
const audioContext = new AudioContext();

// Create an oscillator node
const oscillator = audioContext.createOscillator();

// Set the oscillator type to "sine"
oscillator.type = "sine";

// Set the initial frequency and amplitude values
let frequency = 400;
let amplitude = 0.5;

// Create two additional oscillator nodes for harmony
const harmony1 = audioContext.createOscillator();
harmony1.type = "sawtooth";
harmony1.frequency.setValueAtTime(600, audioContext.currentTime);

const harmony2 = audioContext.createOscillator();
harmony2.type = "triangle";
harmony2.frequency.setValueAtTime(800, audioContext.currentTime);

const volume = audioContext.createGain();
volume.gain.setValueAtTime(0.5, audioContext.currentTime);

harmony1.connect(volume);
harmony2.connect(volume);
volume.connect(audioContext.destination);

// Create a gain node for the amplitude modulation effect (tremolo)
const tremolo = audioContext.createGain();
tremolo.gain.setValueAtTime(1, audioContext.currentTime);

// Create an LFO oscillator node for the frequency modulation effect (vibrato)
const vibrato = audioContext.createOscillator();
vibrato.type = "sine";
vibrato.frequency.setValueAtTime(5, audioContext.currentTime);

// Connect the vibrato oscillator to the frequency of the main oscillator
vibrato.connect(oscillator.frequency);

// Connect the tremolo gain node to the amplitude of the main oscillator
oscillator.connect(tremolo).connect(audioContext.destination);

// Create a low-pass filter node
const filter = audioContext.createBiquadFilter();
filter.type = "lowpass";
filter.frequency.setValueAtTime(1000, audioContext.currentTime);

// Connect the filter to the audio context destination
oscillator.connect(filter).connect(audioContext.destination);

// Create a reverb node
const convolver = audioContext.createConvolver();
const impulseResponseUrl = 'path/to/impulse/response.wav';

// Load the impulse response audio file
fetch(impulseResponseUrl)
  .then(response => response.arrayBuffer())
  .then(buffer => audioContext.decodeAudioData(buffer))
  .then(audioBuffer => {
    convolver.buffer = audioBuffer;
  });

// Connect the convolver node to the audio context destination
oscillator.connect(convolver).connect(audioContext.destination);


// Start the oscillators
oscillator.start();
//harmony1.start();
//harmony2.start();
vibrato.start();

// Animate the frequency and amplitude values over time
const animate = () => {
  // Use the current time to schedule changes in the future
  const now = audioContext.currentTime;
  const t = now * Math.PI;

  // Update the frequency with a sinusoidal wave
  frequency = 400 + Math.sin(t) * 60 + Math.cos(t * 2) * 40 + Math.sin(t/2) * 100 + Math.sin(t/3)*150;
  oscillator.frequency.setValueAtTime(frequency, now);
  //harmony1.frequency.setValueAtTime(frequency-100, now);
  //harmony2.frequency.setValueAtTime(frequency+100, now);

  // Update the amplitude with a triangular wave
  amplitude = 0.5 + Math.abs(Math.sin(t*2)) * 0.5;
  tremolo.gain.setValueAtTime(amplitude, now);

  // Schedule the next animation frame
  requestAnimationFrame(animate);
};
animate();
