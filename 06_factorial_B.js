


console.log('<====================== Assignment No 02 ========================>');
function factorialofWordsCount(word) {
    if (
      word === null ||
      word === undefined ||
      word.toLowerCase() === "null" ||
      word.toLowerCase() === "undefined"
    ) {
      console.log("Invalid Input");
      return;
    }
    let split = word.split(" ");
    let wordLength = split.length;
    console.log(`Word Count: ${wordLength}`);
  
    let result = 1;
    for (let index = 1; index <= wordLength; index++) {
      result = result * index;
    }
  
    console.log(`Factorial of Word Count: ${result}`);
  }
  
  factorialofWordsCount("Revision is the mother of Success");
  factorialofWordsCount("We never fail,we always learn, Mind it");
  factorialofWordsCount(null);
  factorialofWordsCount("");
  factorialofWordsCount("Somnath Suresh Mohite");
  