const {
    convertStringTo2DArray,
    performanceTest
} = require('./utils');
const canvasDraw = require('./canvasDraw');
const { sudokuSolver } = require('./solvers/sudoku-string-v1');

const sudokuStringInput = document.getElementById('sudokuString');
const solverButton = document.getElementById('solverButton');
const solverTime = document.getElementById('solverTime');

let sudokuString    = updateSudokuString();
let matrix          = updateMatrix();
let solvedMatrix    = [];

solverButton.onclick        = solverButtonEvent;
sudokuStringInput.onchange  = updateAll;

function updateAll(_event)
{
    if(sudokuStringInput.value.length != 81) return;

    sudokuString    = updateSudokuString();
    matrix          = updateMatrix();

    update();
}

function solverButtonEvent(_event)
{
    if(sudokuString.length != 81) return;

    const { result, time } = performanceTest(() => sudokuSolver(sudokuString));
        
    if(!result) return;

    solvedMatrix = updateSolvedMatrix(result);
    solverTime.textContent = time;
    
    update();
}

function updateSudokuString()
{
    if(sudokuStringInput.value.length !== 81) return "";

    return sudokuStringInput.value;
}

function updateMatrix()
{
    if(sudokuString.length !== 81) return [];

    return convertStringTo2DArray(sudokuString);
}

function updateSolvedMatrix(solvedMatrix)
{
    if(solvedMatrix.length !== 81) return [];
    return convertStringTo2DArray(solvedMatrix);
}

function update()
{
    window.requestAnimationFrame(() => canvasDraw(matrix, solvedMatrix));
}


window.onload = () => update();
