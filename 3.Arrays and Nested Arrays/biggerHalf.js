function biggerHalf(arr) {
    arr.sort((a, b) => a - b);

    let middleIndex = Math.floor(arr.length / 2);

    return arr.slice(middleIndex);
}
biggerHalf([4, 7, 2, 5]);
