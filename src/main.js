import { Company } from "./data/company.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";

const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;


const ACTIVE = "active"




const salaryFormErrorElement = document.getElementById("salary_form_error");
const employeesListElement = document.getElementById("employees-all");
const employeesSalaryListElement = document.getElementById("employees-salary");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Company


const company = new Company();
//functions of Employee Form




const employeeForm = new EmployeeForm({idForm: "employee_form", idDateInput: "date_input",
idSalaryInput: "salary_input", idDateError: "date_error", idSalaryError: "salary_error",
 minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY})
 employeeForm.addSubmitHandler((employee) => company.hireEmployee(employee))
/************************************************************* */

/********************************************************************************** */

//functions of Salary Form

let salaryFrom = 0;
let salaryTo = 0;
function onSubmitSalary(event) {
    event.preventDefault();
    const employees = company.getEmployeesBySalary(salaryFrom, salaryTo);
    employeesSalaryListElement.innerHTML = getEmployeeItems(employees);


   
}
function onChangeSalaryFrom(event) {
    const value = +event.target.value;
    if (salaryTo && value >= salaryTo) {
        showErrorMessage(event.target, "Salary 'from' must be less than Salary 'to'",
        salaryFormErrorElement);
    } else {
        salaryFrom = value;
    }
}
function onChangeSalaryTo(event) {
    const value = +event.target.value;
    if (salaryFrom && value < salaryFrom) {
        showErrorMessage(event.target, "Salary 'To' must be greater than Salary 'From'",
        salaryFormErrorElement);
    }
    salaryTo = value;
}
function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const employees = company.getAllEmployees();
        employeesListElement.innerHTML = getEmployeeItems(employees);
    }
}
function getEmployeeItems(employees) {
    return employees.map (e => 
        `<li class="employees-item">
              <div class="employees-item-container">
                 <p class="employees-item-paragraph">Name: ${e.employee_name} </p>
                 <p class="employees-item-paragraph">Email: ${e.email} </p>
                 <p class="employees-item-paragraph">Department: ${e.department}</p>
                 <p class="employees-item-paragraph">Bithdate: ${e.birthDate}</p>
                 <p class="employees-item-paragraph">Salary: ${e.salary}</p>
              </div>
          </li>`).join('');
}


window.showSection = showSection;
window.onChangeSalaryTo = onChangeSalaryTo;
window.onChangeSalaryFrom = onChangeSalaryFrom
window.onSubmitSalary = onSubmitSalary