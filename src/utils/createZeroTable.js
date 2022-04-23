/**
 * Create a Table with Index Position of 0's in Matrix
 * @param {number[]} matrix
 * @return {number[]}
 */
const createZeroTable = matrix => matrix.reduce(
    (accumulator, integer, index) => integer == 0 ? [...accumulator, index] : accumulator
    ,[]
)

module.exports = createZeroTable;