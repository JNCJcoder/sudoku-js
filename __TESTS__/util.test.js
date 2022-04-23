const {
    convertStringTo1DArray,
    convertStringTo2DArray,
    createZeroTable,
    get1DPosition,
    get2DPosition,
    getGridInitial
} = require('../src/utils');


const sudokuString = "013840926687250410900630000700100000000908130008004065470000091000006500051400000";

test('Convertendo uma SudokuString para um Array 1D', () => 
{
    const matrixArrayCorrect = [
        0, 1, 3, 8, 4, 0, 9, 2, 6,
        6, 8, 7, 2, 5, 0, 4, 1, 0,
        9, 0, 0, 6, 3, 0, 0, 0, 0,
        7, 0, 0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 9, 0, 8, 1, 3, 0, 
        0, 0, 8, 0, 0, 4, 0, 6, 5,
        4, 7, 0, 0, 0, 0, 0, 9, 1,
        0, 0, 0, 0, 0, 6, 5, 0, 0,
        0, 5, 1, 4, 0, 0, 0, 0, 0
    ];

    const matrixArray = convertStringTo1DArray(sudokuString);

    expect(matrixArray).toStrictEqual(matrixArrayCorrect);
});

test('Convertendo uma SudokuString para um Array 2D', () => 
{
    const matrixArrayCorrect = [
        [0, 1, 3, 8, 4, 0, 9, 2, 6],
        [6, 8, 7, 2, 5, 0, 4, 1, 0],
        [9, 0, 0, 6, 3, 0, 0, 0, 0],
        [7, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 0, 8, 1, 3, 0], 
        [0, 0, 8, 0, 0, 4, 0, 6, 5],
        [4, 7, 0, 0, 0, 0, 0, 9, 1],
        [0, 0, 0, 0, 0, 6, 5, 0, 0],
        [0, 5, 1, 4, 0, 0, 0, 0, 0]
    ];

    const matrixArray = convertStringTo2DArray(sudokuString);

    expect(matrixArray).toStrictEqual(matrixArrayCorrect);
});

test('Criando uma ZeroTable', () => 
{
    const matrixArray = convertStringTo1DArray(sudokuString);
    const zeroTableCorrect = [
        0,  5, 14, 17, 19, 20, 23, 24, 25, 26, 28,
       29, 31, 32, 33, 34, 35, 36, 37, 38, 40, 44,
       45, 46, 48, 49, 51, 56, 57, 58, 59, 60, 63,
       64, 65, 66, 67, 70, 71, 72, 76, 77, 78, 79,
       80
    ];

    const zeroTable = createZeroTable(matrixArray);

    expect(zeroTable).toStrictEqual(zeroTableCorrect);
});

test('Testando get1DPosition()', () => 
{
    expect(get1DPosition(0, 0)).toBe(0);
    expect(get1DPosition(1, 1)).toBe(10);
    expect(get1DPosition(2, 2)).toBe(20);
    expect(get1DPosition(3, 3)).toBe(30);
    expect(get1DPosition(4, 4)).toBe(40);
    expect(get1DPosition(5, 5)).toBe(50);
    expect(get1DPosition(6, 6)).toBe(60);
    expect(get1DPosition(7, 7)).toBe(70);
    expect(get1DPosition(8, 8)).toBe(80);
});

test('Testando get2DPosition()', () =>
{
    expect(get2DPosition(0)).toStrictEqual([0, 0]);
    expect(get2DPosition(10)).toStrictEqual([1, 1]);
    expect(get2DPosition(20)).toStrictEqual([2, 2]);
    expect(get2DPosition(30)).toStrictEqual([3, 3]);
    expect(get2DPosition(40)).toStrictEqual([4, 4]);
    expect(get2DPosition(50)).toStrictEqual([5, 5]);
    expect(get2DPosition(60)).toStrictEqual([6, 6]);
    expect(get2DPosition(70)).toStrictEqual([7, 7]);
    expect(get2DPosition(80)).toStrictEqual([8, 8]);
});

test('Testando getGridInitial()', () => 
{
    expect(getGridInitial(1)).toBe(0);
    expect(getGridInitial(4)).toBe(3);
    expect(getGridInitial(7)).toBe(6);
    expect(getGridInitial(10)).toBe(9);
    expect(getGridInitial(13)).toBe(12);
    expect(getGridInitial(16)).toBe(15);
    expect(getGridInitial(19)).toBe(18);
    expect(getGridInitial(22)).toBe(21);
    expect(getGridInitial(25)).toBe(24);
});