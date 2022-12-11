import { showErrorMessage } from "./errorMessage.js";
export class EmployeeForm {
    #formElement;
    #inputElements;
    #dateInputElement;
    #salaryInputElement;
    #dateErrorElement;
    #salaryErrorElement;
    #minSalary;
    #maxSalary;
    #minYear;
    #maxYear;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#salaryInputElement = document.getElementById(params.idSalaryInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#salaryErrorElement = document.getElementById(params.idSalaryError);
        this.#minSalary = params.minSalary;
        this.#maxSalary = params.maxSalary;
        this.#minYear = params.minYear;
        this.#maxYear = getMaxYear();
        this.onChange();
    }
    addSubmitHandler(processEmployeeFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const employee = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(employee)
            processEmployeeFun(employee);
        })
    }
    onChange() {
        this.#dateInputElement.addEventListener("change", (event) => {
            this.validateBirthdate(event.target);
        })
        this.#salaryInputElement.addEventListener("change", (event) => {
            this.validateSalary(event.target);
        })
       
    }
   validateSalary(element) {
        const value = +element.value;
        if (value < this.#minSalary || value > this.#maxSalary) {
            const message = value < this.#minSalary ? `salary must be ${this.#minSalary} or greater`
                : `salary must be ${this.#maxSalary} or less`;
            showErrorMessage(element, message, this.#salaryErrorElement);
        }
    
    }
    validateBirthdate(element) {
        const value = +element.value.slice(0, 4);
        if (value < this.#minYear || value > this.#maxYear) {
            const message = value < this.#minYear ? `year must be ${this.#minYear} or greater`:
                 `year must be ${this.#maxYear} or less`;
            showErrorMessage(element, message, this.#dateErrorElement) ;    
    
        }
    
    }
    

}





function getMaxYear() {
    return new Date().getFullYear();
}