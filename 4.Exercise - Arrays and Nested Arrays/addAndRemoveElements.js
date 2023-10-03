function addAndRemoveElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "add":
                result.push(i + 1);
                break;
            case "remove":
                result.pop();
                break;
        }
    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        result.forEach((x) => console.log(x));
    }
}

addAndRemoveElements(["remove", "remove", "remove"]);
