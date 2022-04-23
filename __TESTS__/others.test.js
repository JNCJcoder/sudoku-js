const {
    get1DPosition,
    get2DPosition,
    getGridInitial,
    convertStringTo1DArray
} = require('../src/utils');

const sudokuString = "013840926687250410900630000700100000000908130008004065470000091000006500051400000";
const matrixArray = convertStringTo1DArray(sudokuString);

test('Testando varredura de Grid', () => {
    const [xPosition, yPosition] = get2DPosition(0);

    const gridValuesCorrect = [
        0,1,3,
        6,8,7,
        9,0,0
    ];
    let gridValues = [];

    let xGrid = getGridInitial(xPosition);
    let yGrid = getGridInitial(yPosition);

    expect(xGrid).toBe(0);
    expect(yGrid).toBe(0);

    const xGridMax = xGrid + 3;
    const yGridMax = yGrid + 3;

    let index = 0;
    for (xGrid; xGrid < xGridMax; xGrid++)
    {
        for (yGrid; yGrid < yGridMax; yGrid++, index++)
        {
            gridValues.push(matrixArray[get1DPosition(xGrid, yGrid)]);
        }
        yGrid -= 3;
    }

    expect(xGridMax).toBe(3);
    expect(yGridMax).toBe(3);

    expect(gridValues).toStrictEqual(gridValuesCorrect);
});

test('Testando varredura em Linha e Coluna', () => 
{
    const [yPosition, xPosition] = get2DPosition(0);

    const colunaCorrect    = [0, 6, 9, 7, 0, 0, 4, 0, 0];
    const linhaCorrect     = [0, 1, 3, 8, 4, 0, 9, 2, 6];
    let coluna  = [];
    let linha   = [];

    for (let index = 0; index < 9; index++)
    {
        coluna.push(matrixArray[get1DPosition(index, yPosition)])
        linha.push(matrixArray[get1DPosition(xPosition, index)]);
    }

    expect(coluna).toStrictEqual(colunaCorrect);
    expect(linha).toStrictEqual(linhaCorrect);
});