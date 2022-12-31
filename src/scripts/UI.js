import favicon from '../assets/knight.svg';

const body = document.querySelector('body');

function createBoard() {
  let boardHtml = '';
  for (let i = 1; i <= 8; i += 1) {
    boardHtml += "<div class='row'>";
    for (let j = 1; j <= 8; j += 1) {
      boardHtml += `<div class='column' data-coord='${i}${j}'></div>`;
    }
    boardHtml += '</div>';
  }
  board.innerHTML = boardHtml;
}

export function renderUI() {
  body.innerHTML = `
    <header>
        <h1>Knights Travails</h1>
        <h2 id="display">Position your knight...</h2>
        <button id="reset">RESET</button>
    </header>
    <main>
        <div id="board">
        </div>
    </main>
    `;

  createBoard();
}

export function setFavicon() {
  const headTitle = document.querySelector('head');
  const faviconLink = document.createElement('link');
  faviconLink.setAttribute('rel', 'shortcut icon');
  faviconLink.setAttribute('href', favicon);
  headTitle.appendChild(faviconLink);
}
