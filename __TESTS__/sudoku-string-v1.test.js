const  {
    isPossible,
    solver,
    sudokuSolver
} = require('../src/solvers/sudoku-string-v1');

const {
    convertStringTo1DArray,
    createZeroTable,
    convertArrayToString
} = require('../src/utils');

const sudokuString = "013840926687250410900630000700100000000908130008004065470000091000006500051400000";
const sudokuStringCorrect = "513847926687259413942631857734165289265978134198324765476582391329716548851493672";
const matrixArray = convertStringTo1DArray(sudokuString);

test('Testando isPossible()', () =>
{
    // 0
    expect(isPossible(matrixArray, 0, 1)).toBe(false);
    expect(isPossible(matrixArray, 0, 2)).toBe(false);
    expect(isPossible(matrixArray, 0, 3)).toBe(false);
    expect(isPossible(matrixArray, 0, 4)).toBe(false);
    expect(isPossible(matrixArray, 0, 5)).toBe(true);
    expect(isPossible(matrixArray, 0, 6)).toBe(false);
    expect(isPossible(matrixArray, 0, 7)).toBe(false);
    expect(isPossible(matrixArray, 0, 8)).toBe(false);
    expect(isPossible(matrixArray, 0, 9)).toBe(false);

    // 5
    expect(isPossible(matrixArray, 5, 1)).toBe(false);
    expect(isPossible(matrixArray, 5, 2)).toBe(false);
    expect(isPossible(matrixArray, 5, 3)).toBe(false);
    expect(isPossible(matrixArray, 5, 4)).toBe(false);
    expect(isPossible(matrixArray, 5, 5)).toBe(false);
    expect(isPossible(matrixArray, 5, 6)).toBe(false);
    expect(isPossible(matrixArray, 5, 7)).toBe(true);
    expect(isPossible(matrixArray, 5, 8)).toBe(false);
    expect(isPossible(matrixArray, 5, 9)).toBe(false);
});

test('Testando solver()', () =>
{
    const sudokuStringToSolve = "013847926687259413942631857734165289265978134198324765476582391309716548851493672"

    const matrixToSolve = convertStringTo1DArray(sudokuStringToSolve);

    const solvedSudoku = convertArrayToString(
        solver(
            matrixToSolve,
            createZeroTable(matrixToSolve)
        )
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