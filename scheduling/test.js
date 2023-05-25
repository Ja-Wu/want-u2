const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

const data = [10, 10, 12];
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, canvas.height]);

let order = d3.range(data.length);
d3.shuffle(order);

let barWidth = canvas.width / data.length;
const barPadding = barWidth * 0.05;
let iteration = 0;
let animationId;

function drawBars() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  data.sort((a,b) => b-a);
  console.log(data);
  
  data.forEach((d, i) => {
    const j = order[iteration];
    const barHeight = yScale(data[i]); // Apply yScale to get the correct bar height
    barWidth = canvas.width / data.length;
    const x = i * barWidth + barPadding / 2;
    const y = canvas.height - barHeight;
  
    context.fillStyle = i === j ? 'red' : 'blue';
    context.strokeStyle = 'black';
    
    context.fillRect(x, y, barWidth - barPadding, barHeight);
    context.strokeRect(x, y, barWidth - barPadding, barHeight);
  });
  
  iteration++;
  
  if (iteration >= order.length) {
    cancelAnimationFrame(animationId);
  } else {
    setTimeout(() => {
      animationId = requestAnimationFrame(drawBars);
    }, 100); // add a delay between each frame in ms
  }
}

function startAnimation() {
  data.push(data.length + 2);
  iteration = 0;
  order = d3.range(data.length);
  d3.shuffle(order);
  cancelAnimationFrame(animationId);
  animationId = requestAnimationFrame(drawBars);
}

function resetAnimation() {
  cancelAnimationFrame(animationId);
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.forEach(() => {data.pop()});
}

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startAnimation);
resetButton.addEventListener('click', resetAnimation);

resetAnimation();