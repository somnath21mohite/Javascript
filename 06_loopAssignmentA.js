
console.log("<========================== STEP 1 ===========================>");
console.log("");

    let word = "Iam very good IT Developer";
    let vowelsCount = 0;
    for (let index=0; index<word.length;index++){
        let char = word.charAt(index).toLowerCase();
        if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u') {
          vowelsCount = vowelsCount + 1;
        }
    }
console.log(`The total number Vowels count is: ${vowelsCount }`);

console.log("");
console.log("<========================== STEP 2 ===========================>");
console.log("");
function sum_of_cubes(n){
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum = sum + (index*index*index);
        }
        return sum;
}
console.log(`The sum of cube is:${sum_of_cubes(5)}`);

console.log("");
console.log("<========================== STEP 3 ===========================>");
console.log("");

function oddPositionedChar(string){
let result = " ";

  for (let index = 1; index <string.length; index = index+2) {  
    console.log(string.charAt(index));
  result += string[index] ;  
  }

  return result;
 
}

console.log(`Above String1 odd positioned character: ${oddPositionedChar("HardWorkalwayspaysback")}`);
console.log(`AboveString1 odd positioned character: ${oddPositionedChar("SoonIwillbeUIITchamp")}`); 
