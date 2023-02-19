const  {
    solver,
    sudokuSolver
} = require('../src/solvers/sudoku-string-v2');

const {
    convertStringTo1DArray,
    convertArrayToString
} = require('../src/utils');

const sudokuString = "013840926687250410900630000700100000000908130008004065470000091000006500051400000";
const sudokuStringCorrect = "513847926687259413942631857734165289265978134198324765476582391329716548851493672";

test('Testando solver()', () =>
{
    const sudokuStringToSolve = "013847926687259413942631857734165289265978134198324765476582391309716548851493672"

    const matrixToSolve = convertStringTo1DArray(sudokuStringToSolve);

    const solvedSudoku = convertArrayToString(
        solver(matrixToSolve)
    );
    
    expect(solvedSudoku).not.toBe(false);
    expect(solvedSudoku).toStrictEqual(sudokuStringCorrect);
});

// Integração

test('Testando SudokuSolver()', () =>
{
    const solvedSudoku = sudokuSolver(sudokuString);

    expect(solvedSudoku).not.toBe(false);
    expect(solvedSudoku).toStrictEqual(sudokuStringCorrect);
});