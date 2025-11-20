const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let isDarkMode = localStorage.getItem("theme") === "dark";
const squareSize = 52;

canvas.width = innerWidth;
canvas.height = innerHeight;

const animatePosition = {
  step: 1,
  x: getRandomInt(0, innerWidth),
  y: getRandomInt(0, innerHeight),
};


const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY + window.scrollY;
});

addEventListener("touchmove", (e) => {
  const event = e?.changedTouches?.[0];
  if (!event) return;
  mouse.x = event.clientX;
  mouse.y = event.clientY + window.scrollY;
});

addEventListener("resize", () => {
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
    this.size = squareSize;
  }

  calculateOpacity() {
    const squareX = this.x + squareSize / 2 - mouse.x;
    const squareY = this.y + squareSize / 2 - mouse.y;
    for (let i = 1; i < 20; i++) {
      const distance = i === 1 ? squareSize / 2 : squareSize * i;
      if (
        squareX < distance &&
        squareX > -distance &&
        squareY < distance &&
        squareY > -distance
      )
        return isDarkMode ? 1 / (i * 6) : 1 / (i * 5);
    }
    return 0;
  }

  draw() {
    c.strokeStyle = isDarkMode
      ? `rgba(255, 255, 255, ${this.calculateOpacity()})`
      : `rgba(0, 0, 0, ${this.calculateOpacity()})`;

    c.strokeRect(this.x, this.y, this.size, this.size);
    const squareX = this.x + squareSize / 2 - mouse.x;
    const squareY = this.y + squareSize / 2 - mouse.y;

    const distance = squareSize / 2;
    if (
      squareX < distance &&
      squareX > -distance &&
      squareY < distance &&
      squareY > -distance
    ) {
      c.fillStyle = isDarkMode
        ? `rgba(255, 255, 255, 0.02)`
        : `rgba(0, 0, 0, 0.02)`;

      c.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  update() {
    this.draw();
  }
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
  isDarkMode = localStorage.getItem("theme") === "dark";
  squares.forEach((item) => {
    item.update();
  });
}

init();
animate();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
