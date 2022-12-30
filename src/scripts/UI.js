import favicon from '../assets/knight.svg';

const body = document.querySelector('body');

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

function createBoard() {
    let boardHtml = "";
    for (let i = 1; i <= 8; i++) {
        boardHtml += "<div class='row'>";
        for (let j = 1; j <= 8; j++) {
            boardHtml += `<div class='column' data-coord='${i}${j}'></div>`;
        }
        boardHtml += "</div>";
    }
    board.innerHTML = boardHtml;
}

export function setFavicon() {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);
}