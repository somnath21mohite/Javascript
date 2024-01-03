console.log("");
console.log("<==================== STEP 2 =====================>");
console.log("");

var isEvenOrOdd = function(num){
    var returnValue= "";
    if (num % 2 == 0) {
        returnValue= "EVEN";  
    }else{
        returnValue= "ODD";  
    }
    return returnValue;    
}
var result = isEvenOrOdd(45);
  console.log(`45 Given number is ${result}`);
  var result = isEvenOrOdd(70);
  console.log(`70 Given number is ${result}`);
  var result = isEvenOrOdd(67);
  console.log(`67 Given number is ${result}`);
  var result = isEvenOrOdd(98);
  console.log(`98 Given number is ${result}`);

console.log("");
console.log("<==================== STEP 2 =====================>");
console.log("");

var voteEligible = function(age){
    var result = "" ;
    if (age>=18) {
    result =  `${age} is eligible for Vote.`;      
            } else {
     result =   `${age} is not eligible for Vote.`;
    }
     return result
}
var result = voteEligible(18);
console.log(result);
var result = voteEligible(20);
console.log(result);
var result = voteEligible(17);
console.log(result);
var result = voteEligible(40);
console.log(result);

console.log("");
console.log("<==================== STEP 3 =====================>");
console.log("");

var containCheck = function(word){
    var result = "";
    if (word.length>=10) {
        result =  `${word} string contain more than 10 character.`  ;
    } else {
        result = `${word} string contain not more than 10 character .`;        
    }
return result;
}
var result = containCheck("JavaScript-ES6");
console.log(result);
var result = containCheck("Java");
console.log(result);


console.log("");
console.log("<==================== STEP 4 =====================>");
console.log("");

var chechStart = function(word){
    var result = "";
    if (word.startsWith("Java")) {
        result = `Given Word - ${word} starts with "Java".` ;
     } else {
     result =` Given Word - ${word} does not starts with "Java".`;
   }
   return result;
}
var result = chechStart("JavaScript Language");
console.log(result);
var result = chechStart("C++ Language");
console.log(result);