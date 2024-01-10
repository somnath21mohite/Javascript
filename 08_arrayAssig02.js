
console.log("<====================== STEP 1 =====================>");
const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11]
console.log("The total elements length:",arrayNumber.length);

console.log("<====================== STEP 2 =====================>");
console.log("The First element is:",arrayNumber.shift());
console.log("The last element is:",arrayNumber.pop());

console.log("<====================== STEP 3 =====================>");
const indexOf6 = arrayNumber [arrayNumber.length-2];
console.log("The third last element is:",indexOf6);

console.log("<====================== STEP 4 =====================>");
const arrayNum = [20,31,40,25,23,11,29,9,60,2,11];
let evenNumber = 0;
for (const evenNumber of arrayNum) {
    if (evenNumber%2==0) {
        console.log("The even number is:",evenNumber);  
}
}

console.log("<====================== STEP 5 =====================>");
const array_Num = [20,31,40,25,23,11,29,9,60,2,11];
let oddNumber = 0;
for (const oddNumber of array_Num) {
    if (oddNumber%2!=0) {

        console.log("The odd number is:",oddNumber);  
    }
    }
    console.log("<====================== STEP 6 =====================>");
let sum=0;
for(let i=0; i<array_Num.length; i++){
   
   if(i%2==0){
    let evenNum = array_Num[i];
    
    sum = sum + evenNum;
    console.log(evenNum);
   }  
     }
     console.log(`Sum of even-positioned element is:${sum}`);


console.log("<====================== STEP 7 =====================>");
     const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
     let sum1 = 0;
     for (let index = 0; index < arrayNumbers.length; index++) {if (index%2!=0) {
        let oddNum = arrayNumbers[index];
     sum1 = sum1 + oddNum;
     console.log(oddNum);         
     }      
     }
console.log(`Sum of odd-positioned element is:${sum1}`);

console.log("<====================== STEP 8 =====================>");
let addition = 0;
for (const allElement of arrayNumbers) {
    addition = addition + allElement;
     }
     console.log(`the sum of all element is ${addition}`);

console.log("<====================== STEP 9 =====================>");
let multiplay = [];
for (const num of arrayNumbers) {
    if (num%5==0) {
        multiplay.push(num);
            }
    }
console.log("Then number which are multiplay of 5:", multiplay);


console.log("<====================== STEP 10 =====================>");
let word = 0;
word = arrayNumbers.includes(115);
console.log("Is number 115 available in arraynumbers:",word);

console.log("<====================== STEP 11 =====================>");
let word_1 = 0;
word_1 = arrayNumbers.includes(23);
console.log("Is number 23 available in arraynumbers:",word_1);


console.log("<====================== STEP 12 =====================>");
arrayNumbers.splice(3,0,55,66);
console.log("Inert numbers->55,66 at index 3: ",arrayNumbers);

console.log("<====================== STEP 13 =====================>");
const arrayNums = [20,31,40,25,23,11,29,9,60,2,11];
arrayNums.splice(4,3);
console.log("Delete 3 elements starting from index 4:",arrayNums);


