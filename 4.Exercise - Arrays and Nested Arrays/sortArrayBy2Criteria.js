function sortArrayby2Criteria(arr) {
    arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (b.length > a.length) {
            return -1;
        }
        return a.localeCompare(b);
    });
    arr.forEach((element) => console.log(element));
}

sortArrayby2Criteria(["alpha", "beta", "gamma"]);
