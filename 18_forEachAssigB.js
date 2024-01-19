

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }   
    getDetails(){
        console.log(`ID: ${this.emp_id}, Name: ${ this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);

    }
}
const anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [anil,radha,rishi,sonali,monika,viny,mahi];

//Find the "TCS" employee details and log only name&company on console.
console.log("************************** STEP 1 *************************");

arrayEmployee.forEach((element) => {
    if (element.emp_company==="TCS") {  
        console.log(`Name: ${element.emp_name}, Company: ${element.emp_company}`);   
    } 
});

//Find the Employees with salary greater than or equal 50000.
console.log("************************** STEP 2 *************************");

arrayEmployee.forEach(element => {
    if (element.emp_salary>=50000) {
        element.getDetails();       
    }
});

//Find the sum of all employees salary and log on console.
console.log("************************** STEP 3 *************************");
 const totalSalary = arrayEmployee.reduce((rnt,element) => {
    return rnt +element.emp_salary
         },0);
console.log(`The sum of all employees salary: ${totalSalary}`);

//Find the average salary and log on console
console.log("************************** STEP 4 *************************");

console.log(`The Average salary: ${totalSalary/arrayEmployee.length}`);

//Find the "IT" OR "HR" department employess whose salary is greater the or equal to 75000.
console.log("************************** STEP 5 *************************");
arrayEmployee.forEach(element => {
   if (element.emp_dept== "IT" || "HR") {
    if (element.emp_salary>=75000) {
        element.getDetails();
    }    
   } 
});



