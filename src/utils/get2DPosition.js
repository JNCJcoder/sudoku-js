/**
 * Get 2D Position
 * @param {number} position - Index Position
 * @return {number[]} X/Y Position
 */
const get2DPosition = position => [(position / 9) | 0, position % 9];

module.exports = get2DPosition;