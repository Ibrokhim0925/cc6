//Step 2: Create a base class called Employee
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `Employee: ${this.name}, Department: ${this.department}`;
    }
}

//Step 3: Create a subclass called Manager that extends Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `Manager: ${this.name}, Department: ${this.department}, Manages: ${this.teamSize} employees.`;
    }
}

//Step 4: Create a few sample employees and managers
console.log("Creating employee and manager instances...");
const employee1 = new Employee("Jane Doe", "Engineering");
const employee2 = new Employee("John Smith", "Marketing");
const manager1 = new Manager("Peter Jones", "Engineering", 12);
const manager2 = new Manager("Susan Lee", "HR", 6);

// Step 5: Create a class called Company
class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        console.log("--- Company Employee Roster ---");
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
        console.log("----------");
    }
}

//Step 6: Instantiate a Company object, add employees, and list them
console.log("\nInstantiating a company and adding employees...");
const myTechCompany = new Company();

myTechCompany.addEmployee(employee1);
myTechCompany.addEmployee(employee2);
myTechCompany.addEmployee(manager1);
myTechCompany.addEmployee(manager2);

myTechCompany.listEmployees();