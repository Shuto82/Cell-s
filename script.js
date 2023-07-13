let rndNumX;
let rndNumY;

const tableDraw = () => {
    document.querySelector('table').innerHTML = '';
    let size1 = + document.getElementById('size').value;
    if (size1) {
        for (let i = 0; i < size1; i++) {
            let tableRow = document.querySelector('table').insertRow(-1);
            for (let j = 0; j < size1; j++) {
                let tableCell = tableRow.insertCell(-1);
                tableCell.classList.add('box');
            }
        }
    
    rndNumX = Math.floor(Math.random() * size1);
    rndNumY = Math.floor(Math.random() * size1);

    console.log(rndNumX, rndNumY)
    }
}
let gameover = false;
let totalClick = 0;
function checker(e) {
    if (!gameover) {
    totalClick++;
    document.getElementById('clicks').innerHTML = `<p>Eddigi kattintások száma: ${totalClick}.</p>`;
    console.log(e.target.tagName);
    if (e.target.tagName == 'TD') {
        let selectX = e.target.cellIndex;
        let selectY = e.target.parentNode.rowIndex;
        console.log(selectX, selectY)
        if (selectX == rndNumX && selectY == rndNumY) {
            e.target.classList.add('red');
            gameover = true;
            document.getElementById('init').style.display = 'flex';
        } else {e.target.classList.add('black')}
    }
}}

function init() {
    rndNumX = 0;
    rndNumY = 0;
    document.querySelector('table').innerHTML = '';
    document.getElementById('size').value = '';
    totalClick = 0;
    document.getElementById('clicks').innerHTML = '';
    gameover = false;
    document.getElementById('init').style.display = 'none';
}