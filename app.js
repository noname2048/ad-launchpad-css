const launchpad1 = document.querySelector("#launchpad1");
const launchpad2 = document.querySelector("#launchpad2");

const SQUARE_NUM = 400;
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColorToEl(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < SQUARE_NUM; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColorToEl(square);
  });
  square.addEventListener("mouseout", () => {
    removeColorFromEl(square);
  });
  launchpad1.appendChild(square);
}

function getColorAttr(element) {
    const color = element.getAttribute('color');
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function changeColor(element) {
    console.group("changeColor");
    console.log("clicked!");
    console.groupEnd();

    const new_colors = colors.filter(c => c !== element.getAttribute("color"));
    const new_color = new_colors[Math.floor(Math.random() * new_colors.length)]
    element.setAttribute("color", new_color);
    getColorAttr(element);
}

for (let i = 0; i < SQUARE_NUM; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("color", getRandomColor());
    // square.color = getRandomColor();

    square.addEventListener("mouseover", () => {
        getColorAttr(square);
    });

    square.addEventListener("mousedown", () => {
        changeColor(square);
    });

    square.addEventListener("mouseout", () => {
        removeColorFromEl(square);
    });
    launchpad2.appendChild(square);
}