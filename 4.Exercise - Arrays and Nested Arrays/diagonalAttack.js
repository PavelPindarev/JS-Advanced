function diagonalAttack(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let j = matrix.length - 1;
    let firstDiagonalNums = [];
    let secondDiagonalNums = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(" ").map((x) => Number(x));
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][j];
        firstDiagonalNums.push(matrix[i][i]);
        secondDiagonalNums.push(matrix[i][j--]);
    }
    if (firstDiagonalSum === secondDiagonalSum) {
        //fill new matrix with sum;
        let newMatrix = [];
        let k = matrix.length - 1;
        for (let i = 0; i < matrix.length; i++) {
            let newArray = [];
            newArray.length = matrix.length;
            newArray.fill(firstDiagonalSum);
            newArray[i] = firstDiagonalNums[i];
            newArray[k--] = secondDiagonalNums[i];
            newMatrix[i] = newArray;
        }
        for (const row of newMatrix) {
            console.log(row.join(" "));
        }
    } else {
        for (const row of matrix) {
            console.log(row.join(" "));
        }
    }
}
diagonalAttack([
    "5 3 12 3 1",
    "11 4 23 2 5",
    "101 12 3 21 10",
    "1 4 5 2 2",
    "5 22 33 11 1",
]);
