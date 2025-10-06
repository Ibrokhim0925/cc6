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
