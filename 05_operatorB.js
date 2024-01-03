
console.log("========================== STEP 1 ============================");

function greaterNumber(n1,n2){
    var largest = Math.max(n1,n2);
    console.log(`The greater number is  ${largest}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("");
console.log("============================ STEP 2 ===========================");
console.log();

function isEvenOrOddNum(n1){
    var result = n1 % 2;
var resultValue =  result == 0 ? "is Even Number" : "is Odd Number"; 
console.log(n1,resultValue);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("");
console.log("============================= STEP 3 ===============================");
console.log("");

function wordLength(word){
    var result = word.length ;
    var resultValue = result % 2 == 0 ? "EVEN" : "ODD" ;   
    console.log(` Given Words Lenght is : ${ word.length} =>"${ resultValue}"`);
    
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");

