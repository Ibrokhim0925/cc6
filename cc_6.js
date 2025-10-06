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

