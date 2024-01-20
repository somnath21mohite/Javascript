

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
//Add 10 into each element.
console.log("*************************** STEP 1 ***********************");
 let newArray = arrayNumbers.map(element => element + 10);
 console.log(newArray);

 //Cube the index value into its corresponding each array element.
 console.log("*************************** STEP 2 ***********************");
 let newArray_1 = arrayNumbers.map(element => element*element*element);
 console.log(newArray_1);

//Add the index value into its corresponding each array element.
 console.log("*************************** STEP 3 ***********************");
 arrayNumbers.map((element,index) => {
    console.log(`Element at index ${index} : ${element}`);
 }
 );
 