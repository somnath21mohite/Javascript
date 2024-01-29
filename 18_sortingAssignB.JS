class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;  
    }
    getDetails(){
        console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
  }
  const anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const rishi = new Employee(55, "Rishi", "Finace", 47000, "TCS");
  const sonali = new Employee(66, "Sonali", "Finace", 45000, "Infy");
  const monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const viny = new Employee(88, "Vinayank", "IT", 75000, "TCS");
  const mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  const arrayEmployee = [anil, radha, rishi, sonali, monika, viny, mahi]
//  Sort the 'arrayEmploye' in desending order
console.log("**************************** STEP 1 ***************************");
arrayEmployee.sort((a,b) =>{
    return a.emp_id>=b.emp_id ? -1 : 1
});
arrayEmployee.forEach(element => {
    console.log(`ID: ${element.emp_id},      Department: ${element.emp_dept}`);    
});
// Sort the 'arrayEmployees' in ascending order.
console.log("**************************** STEP 2 ***************************");
arrayEmployee.sort((a ,b) => {
    return a.emp_dept>=b.emp_dept ? 1 : -1
});
arrayEmployee.forEach(element => {
    console.log(`ID: ${element.emp_id}, Department: ${element.emp_dept}, Company: ${element.emp_company}`);
});
// The employee array in descending order of employee salary.
console.log("**************************** STEP 3 ***************************");
arrayEmployee.sort((a,b) => {
    return a.emp_salary>=b.emp_salary ? -1 : 1
});
arrayEmployee.forEach(element => {
    console.log(`ID: ${element.emp_name}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
});

