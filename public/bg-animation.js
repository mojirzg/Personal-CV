// import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let isDarkMode = localStorage.getItem("theme") === "DarkMode";
const squareSize = 52;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY + window.scrollY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
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

// Implementation
let squares;
function init() {
  squares = [];

  for (let row = 0; row < innerWidth / squareSize; row++) {
    for (let column = 0; column < innerHeight / squareSize; column++) {
      squares.push(new Square(row * squareSize, column * squareSize));
    }
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  isDarkMode = localStorage.getItem("theme") === "DarkMode";
  squares.forEach((item) => {
    item.update();
  });
}

init();
animate();

/* const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const squareSize = 52;
const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});
// Event Listeners
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
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
    this.color = "#fff";
  }

  draw() {
    c.strokeStyle = `rgba(255, 255, 255, ${this.borderOpacity})`;
    c.fillStyle = this.color;
    c.fill();
    c.strokeRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.draw();
  }
}

let squares = [];
function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c.clearRect(0, 0, canvas.width, canvas.height);

  console.log({ mouse });
  squares = [];
  for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
      squares.push(new Square(mouse.x, mouse.y));
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  squares.forEach((item) => {
    item.update();
  });
}

init();
animate(); */

/* 

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let objects;
function init() {
  objects = [];

  for (let i = 0; i < 400; i++) {
    // objects.push() 
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();



*/
