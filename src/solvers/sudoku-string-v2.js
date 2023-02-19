const {
    convertStringTo1DArray,
    get1DPosition,
    convertArrayToString
} = require('../utils');

/**
 * Solver
 * @param {number[]} matrix
 * @return {number[]}
 */
const solver = (matrix) =>
{
    const rows = [0,0,0,0,0,0,0,0,0];
    const columns = [0,0,0,0,0,0,0,0,0];
    const boxes = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ];

    const solve = (index = 0, jndex = 0) =>
    {
        if(index == 9) return true;

        if(jndex == 9) return solve(index + 1, 0);

        const value = get1DPosition(index, jndex);

        if(matrix[value] != 0) return solve(index, jndex + 1);

        for (let pndex = 1; pndex <= 9; pndex++)
        {
            const mask = 1 << pndex;

            if(mask & rows[index])                                      continue;
            if(mask & columns[jndex])                                   continue;
            if(mask & boxes[parseInt(index / 3)][parseInt(jndex / 3)])  continue;

            rows[index]                                     |= mask;
            columns[jndex]                                  |= mask;
            boxes[parseInt(index / 3)][parseInt(jndex / 3)] |= mask;
            matrix[value]                                   = pndex;

            if(solve(index, jndex + 1)) return true;

            rows[index]                                     ^= mask;
            columns[jndex]                                  ^= mask;
            boxes[parseInt(index / 3)][parseInt(jndex / 3)] ^= mask;
            matrix[value]                                   = 0;
        }

        return false;
    }

    for (let index = 0; index < 9; index++)
    {
        for (let jndex = 0; jndex < 9; jndex++)
        {
            const value = matrix[get1DPosition(index, jndex)];
            if(value == 0) continue;
            const mask = 1 << (value);
            
            rows[index]                                     |= mask;
            columns[jndex]                                  |= mask;
            boxes[parseInt(index / 3)][parseInt(jndex / 3)] |= mask;
        }
    }

    solve(0, 0);

    return matrix;
}
 
/**
 * Sudoku Solver
 * @param {string} matrixString 
 * @return {string} matrixSolved
 */
const sudokuSolver = matrixString =>
{
    if(matrixString.length != 81) return [];
 
    const matrix        = convertStringTo1DArray(matrixString);
    const solvedMatrix  = solver(matrix);
     
    return convertArrayToString(solvedMatrix);
}
 
module.exports = {
    solver,
    sudokuSolver
};