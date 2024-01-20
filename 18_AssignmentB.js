



class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
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
const rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [anil,radha,rishi,sonali,monika,viny,mahi];
//Get the list od all employee salary.
console.log("************************* STEP 1 **************************");
const arrayOfSalary = arrayEmployee.map( (element ) => {
    return element.emp_salary;
});
console.log(arrayOfSalary);

//Get the list of departments.
console.log("************************* STEP 2 **************************");
const arrayOfDepartments = arrayEmployee.map( (element ) => {
    return element.emp_dept;
});
console.log(arrayOfDepartments);


//Get the list of employee id's.
console.log("************************* STEP 3 **************************");
const arrayOfId = arrayEmployee.map((element) => {
    return element.emp_id
})
console.log(arrayOfId);