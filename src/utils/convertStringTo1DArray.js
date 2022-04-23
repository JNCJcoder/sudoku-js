/**
 * @param {string} sudokuString
 */
const convertStringTo1DArray = sudokuString => (
    [...sudokuString].map(Number)
);

module.exports = convertStringTo1DArray;