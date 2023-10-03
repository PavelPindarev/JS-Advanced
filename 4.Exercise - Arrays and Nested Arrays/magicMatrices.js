function magicMatrices(matrix) {
    const magicSum = matrix[0].reduce((a, b) => a + b, 0);
    for (let i = 0; i < matrix.length; i++) {
        const currentSum = matrix[i].reduce((a, b) => a + b, 0);
        if (currentSum !== magicSum) {
            return false;
        }
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i];
        }
        if (sum !== magicSum) {
            return false;
        }
    }
    return true;
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
