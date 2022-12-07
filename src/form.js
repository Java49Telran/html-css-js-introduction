const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const ACTIVE = "active"
const company = new Company();

const dateErrorElement = document.getElementById("date_error");
const salaryErrorElement = document.getElementById("salary_error");
const salaryFormErrorElement = document.getElementById("salary_form_error");
const employeesListElement = document.getElementById("employees-all");
const employeesSalaryListElement = document.getElementById("employees-salary");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Employee Form
function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
    company.hireEmployee(employee);
    
}
function onChange(event) {

    if (event.target.name == "salary") {
        validateSalary(event.target)
    } else if (event.target.name == "birthDate") {
        validateBirthdate(event.target);
    }
}
function validateSalary(element) {
    const value = +element.value;
    if (value < MIN_SALARY || value > MAX_SALARY) {
        const message = value < MIN_SALARY ? `salary must be ${MIN_SALARY} or greater`
            : `salary must be ${MAX_SALARY} or less`;
        showErrorMessage(element, message, salaryErrorElement);
    }

}
function validateBirthdate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}
/************************************************************* */
//functions of Company
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    employee.salary = +employee.salary;
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function(){
    return this.employees;
}
Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) {
    return this.employees.filter(e => e.salary >= salaryFrom && e.salary < salaryTo )
}
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

