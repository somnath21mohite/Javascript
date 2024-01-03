console.log("");
console.log("<=================== STEP 1 ======================>");
console.log("");

var maleMarriageEligibility = function(gender,age,boyName){
    var result = gender == "Male" && age>=21 
    ?  `Hey ${boyName} you are eligible for Marriage.` 
    : `Hey ${boyName} you are not eligible for Marriage.` ; 
    return result;
}
var result = maleMarriageEligibility("Male",25,"Billgates");
console.log(result);
var result = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(result);

console.log("");
console.log("<==================== STEP 2 =====================>");
console.log("");

var femaleMarriageEligibility = function(gender,age,girlName){
    var result = gender == "Female" && age>=18
    ?  `Hey ${girlName} you are eligible for Marriage.` 
    : `Hey ${girlName} You are not eligible for Marriage.` ; 
    return result ;
}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(result);
