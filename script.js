let grid = 64;
let resolution = (250 / grid).toString() + "px";

const drawArea = document.querySelector('#sketchContainer');


function createCanvas(){
  const canv = document.createElement('div');
  drawArea.appendChild(canv);
  for (let i = 1; i <= grid; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    canv.appendChild(column);
    for (let j = 1; j <= grid; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = resolution;
      cell.style.height = resolution;
      column.appendChild(cell);
      cell.addEventListener(
        'mousemove',() =>{
          cell.setAttribute('style', 'background-color:black');
          cell.style.width = resolution;
          cell.style.height = resolution;
        }
      )
    }
  }
}

createCanvas();