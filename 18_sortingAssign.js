  


  const arrayRollNumbers  = [113,45,56,11,32,45,109,799,56,45]

  console.log("*********************** STEP 1 ********************");
  arrayRollNumbers.reverse();
  console.log(arrayRollNumbers);

  console.log("*********************** STEP 2 ********************");
  arrayRollNumbers.sort();
  console.log(arrayRollNumbers);

  console.log("*********************** STEP 3 ********************");
arrayRollNumbers.sort((a,b) => {
    return a > b ? 1 : -1 ;
});
console.log(arrayRollNumbers);


console.log("*********************** STEP 4 ********************");
const Greatest = arrayRollNumbers.slice().sort((a,b)=>b-a )[0];
console.log(`The Greatest Number : ${Greatest}`);

console.log("*********************** STEP 5 ********************");
const smallest = arrayRollNumbers.slice().sort((a,b)=>a-b)[0];
console.log(`The Smallest Number : ${smallest}`);
console.log("*********************** STEP 6 ********************");
const uniqueArray = [...new Set(arrayRollNumbers)].sort((a,b)=>a-b);
console.log(`Remove duplicate Number : ${uniqueArray}`);