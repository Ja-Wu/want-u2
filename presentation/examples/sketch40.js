/* 
    https://www.youtube.com/watch?v=uQXUazMvSCw
*/
let fibs = [1,1]
let scale = 1
let minScale

const colors = ['#9edbff', '#787fff', '#7452ff', '#a1c6ff']

function setup () {
  let len = min(windowHeight, windowWidth);
  len = Math.floor(len/100) * 100;
  createCanvas(len, len);
  angleMode(DEGREES)
  initFibs()
  setMinScale()
}

function draw () {
  translate(width/2, height/2)

  for (let i = 0; i < fibs.length; i++) {
    const scaledFib = fibs[i]*scale
    const color = colors[i%4]
    fill(color)
    rect(0, 0, scaledFib, scaledFib)
    arc(scaledFib, 0, 2*scaledFib, 2*scaledFib, 90, 180)
    translate(scaledFib, scaledFib)
    rotate(-90)
  }

  if (scale <= minScale) {
    fibs = [1,1]
    initFibs()
    scale = 1
  } else {
    scale *= 0.99
  }
}

function addFib () {
  const fibLen = fibs.length

  fibs.push(fibs[fibLen-1] + fibs[fibLen-2])
}

function initFibs () {
  for(let i = 0; i < 25; i++) {
    addFib()
  }
}

function setMinScale () {
  const fibLen = fibs.length

  minScale = fibs[fibLen-5]/fibs[fibLen-1]
}