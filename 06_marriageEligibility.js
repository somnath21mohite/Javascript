
var marriageEligibility = function(gender,age){
    var result = "";
    if (age<0 || age>100 ) { // Invalid Input
        console.log(`${age} ==> Invalid Input...`);        
    } else {
        if ( age>=21 && gender==="Male") {
            return "eligible" ;
            if ( age>=18 && gender ==="Female") {
                return  "eligible" ;               
            } else {
                return "not eligible";
            }      
        } else {
              return "not eligible";
        }
    }
}
var result = marriageEligibility("Male",17);
console.log(`Age 17 is ${result} for marriage`);
var result = marriageEligibility("Male",25);
console.log(`Age 25 is ${result} for marriage`);
var result = marriageEligibility("Male",28);
console.log(`Age 28 is ${result} for marriage`);
var result = marriageEligibility("Male",16);
console.log(`Age 16 is ${result} for marriage`);
var result = marriageEligibility("Male",35);
console.log(`Age 35 is ${result} for marriage`);
var result = marriageEligibility("Male",41);
console.log(`Age 41 is ${result} for marriage`);