
console.log("<======================Assignment No 01 ===========================>");
let factorialOfNum = function(num){
    if (num===0 || num===1){
    return 1;        
    }
    if(num<0){
        return`The Factorial of num: ${num}`;
    }
    if (num === null || num === undefined) {
        return ` Invalid Input:${num}`;
      }
    let result = 1;
    for (let index = 1; index<=num; index++){
        result = result * index;
    }
    return result;
}
let result = factorialOfNum(5);
console.log(`The factorial of num=> ${result}`);
let result1 = factorialOfNum(3);
console.log(`The factorial of num=> ${result1}`);
let result2 = factorialOfNum(null);
console.log(`The factorial of num=> ${result2}`);
let result3 = factorialOfNum(8);
console.log(`The factorial of num=> ${result3}`);
let result4 = factorialOfNum(undefined);
console.log(`The factorial of num=> ${result4}`);
let result5 = factorialOfNum(9);
console.log(`The factorial of num=> ${result5}`);
let result6 = factorialOfNum(0);
console.log(`The factorial of num=> ${result6}`);


