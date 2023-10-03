function sortingNumbers(numbers) {
    numbers.sort((a, b) => a - b);

    const sorted = [];
    while (numbers.length) {
        sorted.push(numbers.shift());
        if (numbers.length) {
            sorted.push(numbers.pop());
        }
    }
    return sorted;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
