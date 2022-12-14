import { showErrorMessage } from "./errorMessage.js";
export class SalariesForm {
    #formElement;
    #salaryFromInputElement;
    #salaryToInputElement;
    #errorMessageElement;
    #salaryFrom;
    #salaryTo;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#salaryFromInputElement = document.getElementById(params.idSalaryFromInput);
        this.#salaryToInputElement = document.getElementById(params.idSalaryToInput);
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);
        this.onChangeSalaryFrom();
        this.onChangeSalaryTo();
    }
    addSubmitHandler(processSalariesFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const salariesObj = {salaryFrom: this.#salaryFrom, salaryTo: this.#salaryTo};
            processSalariesFun(salariesObj);
        })
    }
   onChangeSalaryFrom() {
    this.#salaryFromInputElement.addEventListener("change", (event) => {
        const value = +event.target.value;
        if (this.#salaryTo && value >= this.#salaryTo) {
            showErrorMessage(event.target, "Salary 'from' must be less than Salary 'to'",
            this.#errorMessageElement);
        } else {
            this.#salaryFrom = value;
        }
    })
        
    }
  onChangeSalaryTo() {
    this.#salaryToInputElement.addEventListener("change", (event) => {
        const value = +event.target.value;
        if (this.#salaryFrom && value < this.#salaryFrom) {
            showErrorMessage(event.target, "Salary 'To' must be greater than Salary 'From'",
            this.#errorMessageElement);
        }
        this.#salaryTo = value;
    })
        
    }

}