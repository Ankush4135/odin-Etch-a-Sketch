let grid = 16;

const drawArea = document.querySelector('#sketchContainer');
const btnResolution = document.querySelector('#resolution');
const btnBlack = document.querySelector('#Black')
const btnRandom = document.querySelector('#Random')
// const btnBlack = document.querySelector('#black')

let drawColor = ""

function createCanvas(){
  let resolution = (250 / grid).toString() + "px";
  const canvas = document.createElement('div');
  drawArea.appendChild(canvas);
  for (let i = 1; i <= grid; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    canvas.appendChild(column);
    for (let j = 1; j <= grid; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = resolution;
      cell.style.height = resolution;
      column.appendChild(cell);
      cell.addEventListener(
        'mousemove',() =>{
          draw(cell)
        }
      )
    }
  }
}

createCanvas();

function draw(cell){
  if (drawColor === "black")
    cell.style.backgroundColor = 'black'
  else if (drawColor === "random")
    cell.style.backgroundColor = getRandomHexColor()
  
  else // default color
    cell.style.backgroundColor = 'black'
  
}

function getRandomHexColor () {
  return "#" + (Math.floor (Math.random () * 16777215).toString (16).padStart (6, "0"));
}

btnResolution.onclick = () =>{
  grid = prompt("Enter the grid resolution 1 to 100",16)
  if (grid != null) {
    btnResolution.textContent = grid + "X" + grid;
    createCanvas();
    const removeCanvas = document.querySelector('#sketchContainer > div')
    drawArea.removeChild(removeCanvas)
  }
}

btnBlack.onclick = () =>{
  drawColor = "black"
}

btnRandom.onclick = () =>{
  drawColor = "random"
}