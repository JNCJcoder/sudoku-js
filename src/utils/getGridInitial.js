/**
 * Get Grid Initial
 * @param {number} position - X or Y Position
 * @return {number[]} Initial Position
 */
const getGridInitial = position => ((position / 3) | 0) * 3;

module.exports = getGridInitial;
