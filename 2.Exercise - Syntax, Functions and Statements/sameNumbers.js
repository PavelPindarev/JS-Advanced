function sameNumbers(num) {
 let numAsString = num.toString();
 let bool = true;
 let firstNum = numAsString[0];
 let sum = 0;

 for (let i = 0; i < numAsString.length; i++) {
    const char = numAsString[i];
    if(char !== firstNum) {
        bool = false;
    }
    sum += Number(char);
 }
 console.log(bool);
 console.log(sum);
}
sameNumbers(2222222);
