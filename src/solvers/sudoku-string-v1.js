const {
    convertStringTo1DArray,
    createZeroTable,
    get1DPosition,
    get2DPosition,
    getGridInitial,
    convertArrayToString
} = require('../utils');

// Sudoku

/**
 * Is Possible
 * @param {number[]} matrix
 * @param {number} position
 * @param {number} value
 * @return {boolean} if its possible
 */
const isPossible = (matrix, position, value) =>
{
    const [xPosition, yPosition] = get2DPosition(position);

    let xGrid = getGridInitial(xPosition);
    let yGrid = getGridInitial(yPosition);

    const xGridMax = xGrid + 3;
    const yGridMax = yGrid + 3;

    let index = 0;
    for (xGrid; xGrid < xGridMax; xGrid++)
    {
        for (yGrid; yGrid < yGridMax; yGrid++, index++)
        {
            if (matrix[get1DPosition(xGrid, yGrid)]     == value
            ||  matrix[get1DPosition(xPosition, index)] == value 
            ||  matrix[get1DPosition(index, yPosition)] == value
            )
            {
                return false;
            }
        }
        yGrid -= 3;
    }
    return true;
}

/**
 * Solver
 * @param {number[]} matrix
 * @param {number[]} zeroTable
 * @return {number[]}
 */
const solver = (matrix, zeroTable) =>
{
    for (let index = 0; index < zeroTable.length; index++)
    {
        const currentZero = zeroTable[index];
        if(matrix[currentZero] == 0)
        {
            for (let value = 1; value <= 9; value++)
            {
                if(isPossible(matrix, currentZero, value))
                {
                    matrix[currentZero] = value;
                    if (solver(matrix, zeroTable))
                    {
                        return matrix;
                    }
                }
            }
            matrix[currentZero] = 0;
            return false;
        }
    }

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

    const matrix    = convertStringTo1DArray(matrixString);
    const zeroTable = createZeroTable(matrix);

    const solvedMatrix = solver(matrix, zeroTable);
    
    return convertArrayToString(solvedMatrix);
}

module.exports = {
    isPossible,
    solver,
    sudokuSolver
};