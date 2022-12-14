export class EmployeesList {
    #listElement;
    constructor(idList) {
        this.#listElement = document.getElementById(idList);
    }
    showEmployees(employees) {
        this.#listElement.innerHTML = getEmployeeItems(employees);
    }
}
function getEmployeeItems(employees) {
    return employees.map(e =>
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