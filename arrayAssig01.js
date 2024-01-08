

console.log("<======================== STEP 1 ===========================>");
const fruits_seasonal =["Banana","Orange","Apple","Mango","Water Melon"];

console.log("First Element:",  fruits_seasonal[0]);
console.log("Last Element:",  fruits_seasonal[ fruits_seasonal.length - 1]);

console.log("<======================== STEP 2 ===========================>");
fruits_seasonal.splice(1 ,0, "Papaya");            
console.log(fruits_seasonal);

console.log("<======================== STEP 3 ===========================>");
const fruitsSeasonal =["Banana","Orange","Apple","Mango","Water Melon"];
 fruitsSeasonal.splice(3,1);            
console.log(fruitsSeasonal);
console.log("<======================== STEP 4 ===========================>");
const fruitElement =["Banana","Orange","Apple","Mango","Water Melon"];
fruitElement.push("Pineapple")
console.log(fruitElement);

console.log("<======================== STEP 5 ===========================>");
const fruitName =["Banana","Orange","Apple","Mango","Water Melon"];
fruitName.splice(4,0,"Dragon Fruit");
console.log(fruitName);
console.log("<======================== STEP 6 ===========================>");
const fruitE =["Banana","Orange","Apple","Mango","Water Melon"];
fruitE.splice(1,1,"Kiwi");
console.log(fruitE);

console.log("<======================== STEP 7 ===========================>");
const fruit_Element =["Banana","Orange","Apple","Mango","Water Melon"];
let elementAtIndex= fruit_Element.slice(1,5);
console.log(elementAtIndex);

console.log("<======================== STEP 8 ===========================>");
const fruit1Element =["Banana","Orange","Apple","Mango","Water Melon"];
let removedElements = fruit1Element.slice(2,5);
console.log(removedElements);

