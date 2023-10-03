function extractIncreasingSubsetFromArray(arr) {
    let max = Number.MIN_VALUE;
    let result = arr.filter((x) => {
        if (x >= max) {
            max = x;
            return x;
        }
    });
    return result
}
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]);
