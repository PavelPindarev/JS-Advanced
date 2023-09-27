function aggregateElements(input) {
  let sum = 0;
  let sumOfInverse = 0;
  let concatenate = "";
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    sum += Number(element);
    sumOfInverse += 1 / Number(element);
    concatenate += element;
  }
  console.log(sum);
  console.log(sumOfInverse);
  console.log(concatenate);
}

aggregateElements([2, 4, 8, 16]);
