


function stringHandsOn(){
    var print = "  Hey you are doing good, keep it up";
    console.log("1. Given string is:", print);
    var totalChar = print.length;
    console.log("2.lenght of string is:", print.length);
    var trimResult = print.trim();
    console.log(`3. After trim string is: ${trimResult},    It's length is: ${trimResult.length} `);
    var spaceChar = (totalChar-trimResult.length);
    console.log("4. Total number extra space count is:", spaceChar );
    var charAtIndex2 = print.charAt(2);
    var charAtIndex35 = print.charAt(35);
    console.log("5.First and last character  is:", charAtIndex2,charAtIndex35 );
    var word = "Hey you are doing good, keep it up";
    var result = word.split(" ");
    console.log(`6.Total words in the string is: ${result.length} `);
    var indexOfgood = trimResult.indexOf('good');
    console.log("7.Index of Good is: ", indexOfgood);   
    var result = trimResult.slice(22);
    console.log(`8. substring and Slice starting form index is: ${result}`); 
    var isAvailable = trimResult.includes("up");
    console.log(`9. End with world "up": ${isAvailable}`);
    var startWord = trimResult.includes("Hey");
    console.log(`9. Start with world "Hey": ${startWord}`);
    


    
      


    
}

stringHandsOn();