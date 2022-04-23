const createOffScreenCanvas = require('./createOffScreenCanvas');
const config = require('./config');

/** @type {HTMLCanvasElement} */
const canvas    = document.getElementById('canvas');
const context   = canvas.getContext("2d");

context.font = config.CONTEXT.FONT;
context.textAlign = config.CONTEXT.TEXT_ALIGN;

const BACKGROUND_IMAGE = createOffScreenCanvas(createBackground);

/**
 * Create Background
 * @param {HTMLCanvasElement} offScreenCanvas
 * @param {CanvasRenderingContext2D} offScreenContext 
 */
function createBackground(offScreenCanvas, offScreenContext)
{
    const position = config.MATRIX.SCALE * 3;
    offScreenCanvas.width   = config.SCREEN.WIDTH;
    offScreenCanvas.height  = config.SCREEN.HEIGHT;
        
    offScreenContext.fillStyle = "grey"
    offScreenContext.fillRect(0, 0, config.SCREEN.WIDTH, config.SCREEN.HEIGHT);

    offScreenContext.fillStyle = "black"
    offScreenContext.fillRect(position - 1, 0, 1, config.SCREEN.HEIGHT);
    offScreenContext.fillRect((position * 2) - 1, 0, 1, config.SCREEN.HEIGHT);

    offScreenContext.fillRect(0, position - 1, config.SCREEN.WIDTH, 1);
    offScreenContext.fillRect(0, (position * 2) - 1, config.SCREEN.WIDTH, 1);

    offScreenContext.fillRect(0, (position * 3) - 1, config.SCREEN.WIDTH, 6);
    offScreenContext.fillRect((position * 3) - 1, 0, 6, config.SCREEN.HEIGHT);

    offScreenContext.fillStyle = "#1b2129"
    for (let xPosition = 0; xPosition < config.MATRIX.WIDTH; xPosition++)
    {
        for (let yPosition = 0; yPosition < config.MATRIX.HEIGHT; yPosition++)
        {
            offScreenContext.fillRect(xPosition * config.MATRIX.SCALE, yPosition * config.MATRIX.SCALE, config.MATRIX.SCALE - 1, config.MATRIX.SCALE - 1);
        }
    }
}
 
/**
 * Draw Matrix Value
 * @param {number} xPosition
 * @param {number} yPosition 
 * @param {number} value
 */
function drawMatrixValue(xPosition, yPosition, value)
{
    const _x = xPosition * config.MATRIX.SCALE;
    const _y = yPosition * config.MATRIX.SCALE;
 
    context.fillText(value, _x + config.MATRIX.HALF_SCALE, _y + config.MATRIX.HALF_SCALE + 15);
}

/**
 * Draw Loop
 * @param {number[]} matrix
 * @param {number[]} solvedMatrix 
 */
function drawLoop(matrix, solvedMatrix)
{
    context.drawImage(BACKGROUND_IMAGE, 0, 0);
    
    for (let xPosition = 0; xPosition < config.MATRIX.WIDTH; xPosition++)
    {
        for (let yPosition = 0; yPosition < config.MATRIX.HEIGHT; yPosition++)
        {
            const matrixValue = matrix[yPosition][xPosition];
            if(matrixValue == 0)
            {
                if(solvedMatrix.length == 0) continue;
                const solvedMatrixValue = solvedMatrix[yPosition][xPosition];
                context.fillStyle = "blue";
                drawMatrixValue(xPosition, yPosition, solvedMatrixValue);
            }
            else
            {
                context.fillStyle = "#c9d1d9";
                drawMatrixValue(xPosition, yPosition, matrixValue);
            }
        }
    }
}

module.exports = drawLoop;
