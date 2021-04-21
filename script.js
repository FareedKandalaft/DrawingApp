const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sze = document.getElementById('size');
const clor = document.getElementById('color');
const clear = document.getElementById('clear');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = sze.innerText;
let color = 'black';
let x;
let y;
let isPressed = false;

const min = 6;
const max = 24;

clor.addEventListener('change', (e) => {
  color = e.target.value;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increase.addEventListener('click', () => {
  if (size < max) {
    size++;
    sze.innerText = size;
  }
});

decrease.addEventListener('click', () => {
  if (size > min) {
    size--;
    sze.innerText = size;
  }
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;

  console.log(isPressed, x, y);
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  console.log(isPressed, x, y);
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2); // draws a circle at the point
    drawLine(x, y, x2, y2); // connects last circle to end point
    x = x2; // reset x,y so that line doesnt become a smear
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; //line width is smaller than circle diameter.
  ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);
