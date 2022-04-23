/**
 * Get 1D Position
 * @param {number} x - X Position
 * @param {number} y - Y Position
 * @return {number} Index Position
 */
const get1DPosition = (x, y) => 9 * x + y;

module.exports = get1DPosition;