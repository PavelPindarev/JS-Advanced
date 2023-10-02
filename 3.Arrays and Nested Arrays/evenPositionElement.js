function evenPositionElement(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i += 2) {
    const element = arr[i];
    result += element + " ";
  }
  console.log(result.trim());
}

evenPositionElement(['5', '10']);
