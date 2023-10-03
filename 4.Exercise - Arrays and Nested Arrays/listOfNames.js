function listOfNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    let count = 1;
    names.forEach((element) => {
        console.log(`${count++}.${element}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
