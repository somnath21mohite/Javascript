
//Log the array element.
console.log("************************** STEP 1 *************************");

const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((number,index) => {
    console.log(`Element at index ${index}: ${number}`);
});

//Find the positive number and log on console.
console.log("************************** STEP 2 *************************");

arrayNumbers.forEach(number => {
    if (number > 0) {
      console.log(`Positive number: ${number}`);
    }
  });

//Find negative numbers.
console.log("************************** STEP 3 *************************");
  const negativeNumbers = [];
arrayNumbers.forEach(number => {
  if (number < 0) {
    negativeNumbers.push(number);
  }
});
console.log("Negative Numbers:", negativeNumbers);

//Find the even numbers.
console.log("************************** STEP 4 *************************");
 arrayNumbers.forEach(element => {
    if (element%2!==0) {
        console.log(`The even numbers: ${element}`);        
    }
 });

 //Find the sum of all elements from arrayNumbers.
 console.log("************************** STEP 5 *************************");
const sum = arrayNumbers.reduce((rnt,element) => {
    return rnt + element;    
});
console.log(`Sum of all elements: ${sum}`);

//Log the only even indexed array value on console.
console.log("************************** STEP 6 *************************");
arrayNumbers.forEach((number,index) => {
    if (index% 2 ==0) {
        console.log(`Value at even index ${index}: ${number}`);
    }
    });

