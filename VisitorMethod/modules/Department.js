export class Department {
  constructor(name, employees = []) {
    this.name = name;
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  accept(visitor) {
    visitor.visitDepartment(this);
  }
}
