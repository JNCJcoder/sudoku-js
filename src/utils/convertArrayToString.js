/**
 * @param {number[] | number[][]} matrix
 */
const convertArrayToString = matrix => matrix.toString().replace(/,/g, '');

module.exports = convertArrayToString;