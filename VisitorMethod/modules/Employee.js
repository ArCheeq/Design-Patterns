export class Employee {
  constructor(position, salary) {
    this.position = position;
    this.salary = salary;
  }

  accept(visitor) {
    visitor.visitEmployee(this);
  }
}
