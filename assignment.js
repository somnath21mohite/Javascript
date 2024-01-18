


console.log("<===================== STEP 1 =========================>");

const arrayNum = [11,3,4,11,4,7,3];
let newArray = arrayNum.filter((item, 
    index) => arrayNum.indexOf(item) === index); 
console.log(newArray );

console.log("<===================== STEP 2 =========================>");

function strFirstAndLastElementCapital(str) {

    let words = str.split(" ");
let emptyArray = [];

for (const word of words) {
  let firstElement = word.charAt(0).toUpperCase();

  let lastElement = word.slice(-1).toUpperCase();

  let addElement = firstElement + word.slice(1, -1) + lastElement;

  emptyArray.push(addElement);
}

let joinStr = emptyArray.join(" ");
return joinStr;
}
let result = strFirstAndLastElementCapital("how are you mate");
console.log(result);
