

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    getDetails()
{
    console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`); 
}
}
const anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const rishi = new Employee(55, "Rishi", "Finance", 47000,"TCS");
const sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [anil, radha, rishi, sonali, monika, viny, mahi];
console.log("************************************ STEP 1 *********************************");

const arrayWipro = arrayEmployee.filter( element => {
    return element.emp_company == "Wipro" ;
    });
    arrayWipro.forEach(element => {
        element.getDetails();
    });

 console.log("************************************ STEP 2 *********************************");
const arrayItHr = arrayEmployee.filter(element =>{
    return element.emp_dept == "IT" || element.emp_dept =="HR";
});
arrayItHr.forEach(element => {
    element.getDetails();
})

console.log("************************************ STEP 3 *********************************");
const arrayId = arrayEmployee.filter((element) => {
    return element.emp_id> 50;
})
arrayId.forEach((element) =>{
    element.getDetails();
})

console.log("************************************ STEP 4 *********************************");
const arrayStartWithWord = arrayEmployee.filter((element) => {
    return element.emp_name.startsWith('A') || element.emp_name.startsWith('V') || element.emp_name.startsWith('M');
})
arrayStartWithWord.forEach(element => {
    element.getDetails();
})

console.log("************************************ STEP 5 *********************************");

const arrayOfAverae = arrayEmployee.filter(element =>{
    return element.emp_salary
})
const arrayOfSum = arrayEmployee.reduce((rnt,element) => {
    return rnt + element.emp_salary;
},0);
    console.log(`The average salary of the employee is: ${arrayOfSum/arrayOfAverae.length}`);

   
console.log("************************************ STEP 6 *********************************"); 

const arrayOfAverageSalaryIT = arrayEmployee.filter(element => {
    return element.emp_dept == "IT";
    })
    const sum = arrayOfAverageSalaryIT.reduce((rnt, element) => {
        return rnt + element.emp_salary;
    },0)
console.log(`The average salary for 'IT' department is: ${sum/arrayOfAverageSalaryIT.length}`);