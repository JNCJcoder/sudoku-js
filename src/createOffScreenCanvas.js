/**
 * Create a OffScreen Canvas
 * @param {addStuffCallback} callBack
 * @return {HTMLCanvasElement}
 */
const createOffScreenCanvas = callBack =>
{
    const offScreenCanvas   = document.createElement('canvas');
    const offScreenContext  = offScreenCanvas.getContext("2d");

    callBack(offScreenCanvas, offScreenContext);

    return offScreenCanvas;
}

module.exports = createOffScreenCanvas;