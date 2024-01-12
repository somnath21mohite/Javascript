


console.log("<========================================= STEP 1 ==========================================>");
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.display = function(){
        console.log(`Bank Name:-${this.bankName}, Location:-${this.location}, IFSC Code:-${this.ifscCode}, Brach code:-${this.branchCode}`);
    }
}
const bank_01 = new Bank("YES Bank","Kharghar","YESB0000419","00419");
bank_01.display();
const bank_02 = new Bank("STATE BANK OF INDIA","SBIN0013551","CBD Belapur","013551");
bank_02.display();
const bank_03 = new Bank("BANK OF MAHARASHTRA","MAHB0001150","Pune","001150");
bank_03.display();
const bank_04 = new Bank("AXIS BANK","UTIB0000036","Panvel","000036")
bank_04.display();


console.log("<========================================= STEP 5 ==========================================>")
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`Bank Name:-${bank_02.bankName}, Location:-${bank_02.location}, IFSC Code:-${bank_02.ifscCode}, Brach code:-${bank_02.branchCode}, Open Time:-${bank_02.openTime}, Close Time:-${bank_02.closeTime}`);

console.log("<========================================= STEP 6 ==========================================>")

console.log(`Bank Name:-${bank_04.bankName}, Location:-${bank_04.location}, IFSC Code:-${bank_04.ifscCode}, Brach code:-${bank_04.branchCode},  Open Time:-${bank_04.openTime}, Close Time:-${bank_04.closeTime}`);

console.log("<========================================= STEP 7 ==========================================>")

console.log(`Bank Name:-${bank_01.bankName}, Location:-${bank_01.location}, IFSC Code:-${bank_01.ifscCode}, Brach code:-${bank_01.branchCode},  Open Time:-${bank_01.openTime}, Close Time:-${bank_01.closeTime}`);
