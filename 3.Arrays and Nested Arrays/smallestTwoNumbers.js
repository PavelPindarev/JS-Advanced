function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a - b);
    let firstSmallest = arr.shift();
    let secondSmallest = arr.shift();
    console.log(firstSmallest, secondSmallest);
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
