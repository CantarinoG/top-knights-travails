import favicon from '../assets/knight.svg';

const body = document.querySelector('body');

export function renderUI() {
    body.innerHTML = `
    <header>
        <h1>Knights Travails</h1>
        <h2>Position your knight...</h2>
        <button>RESET</button>
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
    for (let i = 0; i < 8; i++) {
        boardHtml += "<div class='row'>";
        for (let j = 0; j < 8; j++) {
            boardHtml += `<div class='column' class='tile'></div>`;
        }
        boardHtml += "</div>";
    }
    board.innerHTML = boardHtml;
    console.log(board);
}

export function setFavicon() {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);
}