

function reverseString(word){
    var result = "";
for (let index = word.length-1; index >=0; index--) {
    result =result+ word.charAt(index);
}
return result
}
console.log(`First string reverse is: ${reverseString("Hard work always pays back")}`);
console.log(`Second string reverse is: ${reverseString("I will be Angular IT Champ")}`);