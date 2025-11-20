const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let isDarkMode = localStorage.getItem('theme') === 'dark';
const squareSize = 52;

canvas.width = innerWidth;
canvas.height = innerHeight;

let gridOffset = { x: 1, y: -1 };
let gridDirection = { x: 1, y: 1 };
const gridShiftStep = 0.06;
const gridShiftMax = squareSize / 4;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY + window.scrollY;
});

addEventListener('touchmove', (e) => {
  const event = e?.changedTouches?.[0];
  if (!event) return;
  mouse.x = event.clientX;
  mouse.y = event.clientY + window.scrollY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.borderOpacity = 1;
    this.lineWidth = 1;
    this.size = squareSize; // logical size
    this.pulse = 0;
  }

  calculateOpacity() {
    const squareX = this.x + this.size / 2 - mouse.x;
    const squareY = this.y + this.size / 2 - mouse.y;

    for (let i = 1; i < 20; i++) {
      const distance = i === 1 ? this.size / 2 : this.size * i;
      if (
        squareX < distance &&
        squareX > -distance &&
        squareY < distance &&
        squareY > -distance
      ) {
        return isDarkMode ? 1 / (i * 6) : 1 / (i * 5);
      }
    }
    this.pulse = 0;
    return 0;
  }

  draw() {
    c.strokeStyle = isDarkMode
      ? `rgba(255, 255, 255, ${this.calculateOpacity()})`
      : `rgba(0, 0, 0, ${this.calculateOpacity()})`;

    // Draw using logical size (size never changes)
    c.strokeRect(this.x, this.y, this.size, this.size);

    // Optional visual glow overlay
    if (this.pulse > 0) {
      c.fillStyle = isDarkMode
        ? `rgba(255, 255, 255, ${this.pulse * 0.1})`
        : `rgba(0, 0, 0, ${this.pulse * 0.1})`;
      c.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  update() {
    this.draw();
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  isDarkMode = localStorage.getItem('theme') === 'dark';

  // Update grid offset for gentle auto shift
  gridOffset.x += gridShiftStep * gridDirection.x;
  gridOffset.y += gridShiftStep * gridDirection.y;

  if (Math.abs(gridOffset.x) >= gridShiftMax) gridDirection.x *= -1;
  if (Math.abs(gridOffset.y) >= gridShiftMax) gridDirection.y *= -1;

  // Draw squares with offset
  squares.forEach((square) => {
    const originalX = square.x;
    const originalY = square.y;

    square.x = originalX + gridOffset.x;
    square.y = originalY + gridOffset.y;

    square.update();

    square.x = originalX;
    square.y = originalY;
  });
}

let squares;
function init() {
  squares = [];

  for (let row = 0; row < innerWidth / squareSize; row++) {
    for (let column = 0; column < innerHeight / squareSize; column++) {
      squares.push(new Square(row * squareSize, column * squareSize));
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  isDarkMode = localStorage.getItem('theme') === 'dark';

  // Update grid offset for gentle auto shift
  gridOffset.x += gridShiftStep * gridDirection.x;
  gridOffset.y += gridShiftStep * gridDirection.y;

  if (Math.abs(gridOffset.x) >= gridShiftMax) gridDirection.x *= -1;
  if (Math.abs(gridOffset.y) >= gridShiftMax) gridDirection.y *= -1;

  // Draw squares with offset
  squares.forEach((square) => {
    const originalX = square.x;
    const originalY = square.y;

    square.x = originalX + gridOffset.x;
    square.y = originalY + gridOffset.y;

    square.update();

    square.x = originalX;
    square.y = originalY;
  });
}

init();
animate();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
