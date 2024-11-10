export class SalaryReportVisitor {
  constructor() {
    this.totalSalary = 0;
    this.report = '';
  }

  visitEmployee(employee) {
    this.totalSalary += employee.salary;
    this.report += `Position: ${employee.position}, Salary: ${employee.salary}\n`;
  }

  visitDepartment(department) {
    this.report += `Department: ${department.name}\n`;
    department.employees.forEach(employee => employee.accept(this));
  }

  visitCompany(company) {
    this.report += `Company: ${company.name}\n`;
    company.departments.forEach(department => department.accept(this));
  }

  getReport() {
    return this.report + `Total Salary: ${this.totalSalary}\n`;
  }
}
