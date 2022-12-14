import { Company } from "./data/company.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { EmployeesList } from "./ui/EmployeesList.js";
import { SalariesForm } from "./ui/SalariesForm.js";
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const ACTIVE = "active"

const listAllEmployees = new EmployeesList("employees-all");
const listEmployeesBySalary = new EmployeesList("employees-salary");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */

const company = new Company();

const paramsEmployeeForm = {
    idForm: "employee_form", idDateInput: "date_input",
    idSalaryInput: "salary_input", idDateError: "date_error", idSalaryError: "salary_error",
    minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY
}
const employeeForm = new EmployeeForm(paramsEmployeeForm);
employeeForm.addSubmitHandler((employee) => company.hireEmployee(employee))
/************************************************************* */

/********************************************************************************** */
const paramsSalaries = {
    idForm: "salary-form", idSalaryFromInput: "salaryFrom",
    idSalaryToInput: "salaryTo", idErrorMessage: "salary_form_error"
}
const salariesForm = new SalariesForm(paramsSalaries);
salariesForm.addSubmitHandler((salariesObj) => {
    const employees = company.getEmployeesBySalary(salariesObj.salaryFrom,
        salariesObj.salaryTo);
    listEmployeesBySalary.showEmployees(employees);

})




function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const employees = company.getAllEmployees();
        listAllEmployees.showEmployees(employees)
    }
}



window.showSection = showSection;
