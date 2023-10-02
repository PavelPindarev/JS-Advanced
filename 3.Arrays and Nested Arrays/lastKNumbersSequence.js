function lastKNumbersSequence(n, k) {
    let arr = [1];
    for (let i = arr.length; i < n; i++) {
        let newValue = arr.slice(-k).reduce((a, b) => a + b, 0);
        arr.push(newValue);
    }
    return arr;
}
lastKNumbersSequence(6, 3);
