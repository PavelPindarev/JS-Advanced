function biggestElement(matrix) {
    let max = Number.MIN_VALUE;
    for (let arr of matrix) {
        for (let element of arr) {
            if (element > max) {
                max = element;
            }
        }
    }
    console.log(max);
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145],
]);
