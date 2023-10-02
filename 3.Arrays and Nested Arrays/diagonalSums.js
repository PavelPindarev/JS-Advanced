function diagonalSums(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let col = matrix.length - 1;
    for (let row = 0; row < matrix.length; row++) {
        firstDiagonal += matrix[row][row];
        secondDiagonal += matrix[row][col--];
    }
    console.log(firstDiagonal, secondDiagonal);
}
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
]);
