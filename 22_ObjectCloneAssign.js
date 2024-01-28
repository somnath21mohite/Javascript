
const arrayNums = [20,3,4,56,90,400,49]

console.log("************************* STEP 1 **************************");
const clonedArray = arrayNums.slice();
clonedArray.push(55,66);
console.log("Original Array:", arrayNums);
console.log("Cloned Array:", clonedArray);


console.log("************************* STEP 2 **************************");
const clonedArrayNums = [...arrayNums];
const arrayNums_1 = arrayNums.splice(4,0,10,25);
console.log(" Deep clone array:",arrayNums);
console.log("Original array:",clonedArrayNums);

console.log("************************* STEP 3 **************************");
const arrayEven = [2,30,14,8];
const mergeArray  = [...arrayNums, ...arrayEven];
console.log("Merge array:",mergeArray);


console.log("************************* STEP 4 **************************");

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month: "50,00000INR",
        jun_month: "65,00000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
     },
     city: "Mumbai",
     State: "Maharshtra",
     country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);

console.log("************************* STEP 5 **************************");
console.log("Locality is:",employee_info.address.locality);
console.log("City is:", employee_info.address.city);
console.log("State is:", employee_info.address.State);
console.log("Country is:", employee_info.address.country);
console.log("Mobiles:", employee_info.mobiles);

console.log("************************* STEP 6.a **************************")

const employee_info1 = JSON.parse(JSON.stringify(employee_info));
employee_info1.salary.july_month = "80,0000INR";
console.log("Update July_month salary:",employee_info1.salary.july_month);
console.table(employee_info1);

console.log("************************* STEP 6.b **************************")

const employee_info2 = JSON.parse(JSON.stringify(employee_info));
employee_info2.address.country = "United Kingdom";
console.log("Update country:", employee_info1.address.country );
console.table(employee_info2);

console.log("************************* STEP 6.c **************************")
console.log("Original Object");
employee_info.address;
console.table( employee_info);

console.log("Cloned Object ");

let employee_info3 = JSON.parse(JSON.stringify(employee_info));
employee_info3.address.country="United Kingdom";
console.table(employee_info3);
