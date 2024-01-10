
console.log("<===================== STEP 1 ======================>");
let professor = {
    firstName: "S.S.Mohite",
    age: 40,
    designation: "Head of Department",
    subject: "Math",
    
}
console.log(professor);

console.log("<===================== STEP 2 ======================>");
const degree ={
    engineering: "CSC",
    PHD: "Adv Computing",
    BSC: "Chemistry",
    BA : "Economic"
}
console.log(professor);
console.log("<===================== STEP 3 ======================>");
let addOne = {
    certificates: ["Hacker Rsnk Particioation","Certificate in IFE course","Certificate in Adv Programming"]
}
console.log(addOne.certificates);

console.log("<===================== STEP 4 ======================>");
professor.totalExprience = "14 years";
console.log(professor);

console.log("<===================== STEP 5 ======================>");
console.log("Modify subject exisiting property");
professor.subject= "Physic";
console.log(professor);

console.log("<===================== STEP 6 ======================>");

console.log("Add one new certificate-> Oracle Certified at the 2nd index of array:");
 addOne.certificates.splice(2,0,"Oracle Certificates");
console.log(addOne.certificates);

console.log("<===================== STEP 7 ======================>");
console.log("Log the last element of the array:");
console.log(addOne.certificates.pop());

console.log("<===================== STEP 8 ======================>");
console.log(professor);

console.log("<===================== STEP 9 ======================>");
console.log("<== Traverse array ==>");
for (let index = 0; index <addOne.certificates .length; index++) {
    const element = addOne.certificates[index];
    console.log(element);
}