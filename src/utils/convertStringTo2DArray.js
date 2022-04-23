/**
 * @param {string} sudokuString
 */
const convertStringTo2DArray = sudokuString =>
{
    const matrix = [];
    const arrayString = [...sudokuString];

    for (let index = 0; index < 9; index++)
    {
        matrix.push(arrayString.splice(0,9).map(Number));
    }

    return matrix;
}

module.exports = convertStringTo2DArray;