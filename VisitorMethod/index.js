import { Company } from "./modules/Company.js";
import { Department } from "./modules/Department.js";
import { Employee } from "./modules/Employee.js";
import { SalaryReportVisitor } from "./modules/SalaryReportVisitor.js";

const emp1 = new Employee('Developer', 3000);
const emp2 = new Employee('Manager', 5000);
const emp3 = new Employee('Designer', 4000);

const devDepartment = new Department('Development', [emp1]);
const designDepartment = new Department('Design', [emp2, emp3]);

const company = new Company('Tech Corp', [devDepartment, designDepartment]);

const salaryReportVisitor = new SalaryReportVisitor();

company.accept(salaryReportVisitor);
console.log('Company Salary Report:\n', salaryReportVisitor.getReport());

const departmentReportVisitor = new SalaryReportVisitor();
devDepartment.accept(departmentReportVisitor);
console.log('Development Department Salary Report:\n', departmentReportVisitor.getReport());
