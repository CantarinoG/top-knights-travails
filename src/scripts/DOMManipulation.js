import { getPathFromRoot, knightTravails } from './knightTravails';

const knightChar = '♘';

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
// Variables for coordinates

let state = 0;

/* state = 0: Position your knight...
When the user clicks on a tile, the knight will be set there and the initial coords will be defined

state = 1: Select the destination...
When user clicks on a tile, the destination will be set there and the final coords will be defined
H2 will display: "Here is your path..." and the algorithm will be used to calculate the path
and mark the tiles

state = 2: End of functionality
When user clicks on a tile, nothing happens
User needs to hit the reset button to select other coordinates
*/

function drawPath(path) {
  path.shift();
  for (let i = 1; i <= path.length; i += 1) {
    const x = path[i - 1][0];
    const y = path[i - 1][1];
    const tile = document.querySelector(`.column[data-coord="${x}${y}"]`);
    tile.textContent = i;
  }
}

function resetBoard() {
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
  state = 0;
  display.textContent = 'Position your knight...';
  for (let i = 1; i <= 8; i += 1) {
    for (let j = 1; j <= 8; j += 1) {
      const tile = document.querySelector(`.column[data-coord="${i}${j}"]`);
      tile.textContent = '';
    }
  }
}

export function applyListeners() {
  for (let i = 1; i <= 8; i += 1) {
    for (let j = 1; j <= 8; j += 1) {
      const tile = document.querySelector(`.column[data-coord="${i}${j}"]`);
      tile.onclick = () => {
        if (state === 0) {
          startX = i;
          startY = j;
          tile.textContent = knightChar;
          display.textContent = 'Select the destination...';
          state += 1;
        } else if (state === 1) {
          endX = i;
          endY = j;
          const path = getPathFromRoot(knightTravails(startX, startY, endX, endY));
          display.textContent = `It took the knight ${path.length - 1} move(s).`;
          drawPath(path);
          state += 1;
        }
      };
    }
  }
  reset.onclick = resetBoard;
}
