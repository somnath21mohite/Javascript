console.log("<========================= STEP 1 =======================>");
const bankSbi ={
    bankName: "State bank of India",
    IFSC:  "SBIN0012841",
    branchCode: 12841,
    phone: 27746006,
    }
    console.log(bankSbi);

    console.log("<========================= STEP 2 =======================>");
    const bankLocation ={
        street: "sector12",
        city: "Kharghar",
        pinCode: 410210,
    }
console.log(bankLocation);

console.log("<========================= STEP 3 =======================>");

const cloneObject = Object.assign({}, bankSbi,bankLocation );
console.log(cloneObject);

console.log("<========================= STEP 4 =======================>");

const rateOfInterest={
    homeLoanInterest: "8.40%* per annum",
    personalLoanInterest: "11.40%-14.55% per annum",
    dualLoanInterest: "9.15% per annum",
   
}
console.log(rateOfInterest);

console.log("<========================= STEP 5 =======================>");
const sbiDetails =  Object.assign({}, bankSbi, bankLocation, rateOfInterest );
console.log(sbiDetails);

console.log("<========================= STEP 6 =======================>");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(` ${key}: ${element}`);
    }
}

