/**
 * Performance Test in ms
 * @param {addStuffCallback} callBack
 */
const performanceTest = callBack =>
{
    const t0 = performance.now();
    const result = callBack();
    const t1 = performance.now();

    const time = `${t1 - t0}ms`;

    return { result, time };
}

module.exports = performanceTest;