export class Company {
  constructor(name, departments = []) {
    this.name = name;
    this.departments = departments;
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  accept(visitor) {
    visitor.visitCompany(this);
  }
}
