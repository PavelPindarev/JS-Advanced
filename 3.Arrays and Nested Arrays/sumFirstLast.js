function sumFirstLast(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last);
}
sumFirstLast(['5', '10']);