

console.log("---------------------- STEP 1 ----------------------");
console.log("");
function squareOfWordLenght(name){
    var result = name.length;
    console.log(`Lenght Given String is : ${ name.length*name.length}`)
}
squareOfWordLenght("JavaScript")
squareOfWordLenght("Google Chrome");
squareOfWordLenght("Developer Smart");

console.log("");
console.log("---------------------- STEP 2 -----------------------");
console.log("");

function string(givenString){  
console.log(`Lenght Given String is : ${ givenString.length}`);
var result = givenString.split(" ");
console.log(`Total words in string is: ${result.length}`);
console.log(`The string lenght divided by total number words is : ${givenString.length/result.length}`);
var multiple = givenString.length*result.length;
console.log(`The string lenght multiple total number words is : ${ multiple}`);


}
string( "I am Angular Developer");
