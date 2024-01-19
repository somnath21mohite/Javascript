class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
  getDetails() {
    console.log(
      `ID: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`
    );
  }
}
const anil = new Employee(22, "Anil", "IT", 5000, "TCS");
const radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const monika = new Employee(77, "Monika", "IT", "40000", "Wipro");
const viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arryEmployee = [anil, radha, rishi, sonali, monika, viny, mahi];

//Find all the amployees working in "TCS" and log only employees names and company name on console
console.log("<===================== STEP 1 ==========================>");

for (const element of arryEmployee) {
  if (element.emp_company == "TCS") {
    console.log(
      `Name:${element.emp_name}, Company Name:${element.emp_company}`
    );
  }
}
//Find the 'Finance' department employees, log only department and employee name on console
console.log("<===================== STEP 2 ==========================>");
for (const element of arryEmployee) {
  if (element.emp_dept == "Finance") {
    console.log(
      `Name: ${element.emp_name}, Department: ${element.emp_company}`
    );
  }
}

//Find the employees whose name starts with 'R'and log complete employee details in console.
console.log("<===================== STEP 3 ==========================>");

for (const element of arryEmployee) {
  if (element.emp_name.startsWith("R")) {
    element.getDetails();
  }
}
//Find the employees whose salary is greater than 75000, and log on console emp_name,company and salary

console.log("<===================== STEP 4 ==========================>");
for (const element of arryEmployee) {
  if (element.emp_salary > 75000) {
    console.log(
      `Name: ${element.emp_name}, Comapany: ${element.emp_company}, Salary: ${element.emp_salary}`
    );
  }
}
//Find the emp's whose salary greater then or equal 50000 and from 'IT' department ,log complete emp details on console
console.log("<===================== STEP 5 ==========================>");
for (const element of arryEmployee) {
  if (element.emp_salary >= 50000 || element.emp_dept == "IT") {
    element.getDetails();
  }
}
//Find out all the employees from company 'Infy' and log complete employee details on console
console.log("<===================== STEP 6 ==========================>");
for (const element of arryEmployee) {
  if (element.emp_company == "Infy") {
    element.getDetails();
  }
}
