function createEmployee(id, name, birthYear, salary) {
    return {id, name, birthYear, salary};
}
function getRandomNumber(min, max) {
    return Math.trunc(min + Math.random() * (max - min + 1));
}
function getRandomUniqueId(minId, maxId, ids) {
    let id; 
    do {
        id = getRandomNumber(minId, maxId);
    }while(ids.includes(id));
    ids.push(id);
    return id;
}
function createRandomEmployees(nEmployees, idDigits, minSalary,
     maxSalary, minBirthYear, maxBirthYear) {
        const result = [];
        const ids = [];
        const minId = 10 ** (idDigits - 1);
        const maxId = minId * 10 - 1;
        for(let i = 0; i < nEmployees; i++) {
            const id = getRandomUniqueId(minId, maxId, ids);
            const name = "name" + id;
            const birthYear = getRandomNumber(minBirthYear, maxBirthYear);
            const salary = getRandomNumber(minSalary, maxSalary);
            const empl = createEmployee(id, name, birthYear, salary );
            result.push(empl);
        }
        return result;
     }
function getAverageAge(employees) {
    const currentYear = new Date().getFullYear();
    const sumAges = 
    employees.reduce((res, cur) => res + currentYear - cur.birthYear, 0);
    return Math.round(sumAges / employees.length);
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    const employeesBySalary = employees.filter(empl => empl.salary >= salaryFrom
         && empl.salary <= salaryTo);
    employeesBySalary.sort((e1, e2) => e1.salary - e2.salary);
    return employeesBySalary;    
}
function increaseSalary(employees, borderSalary, percent) {
    employees.forEach(empl => {
        if (empl.salary < borderSalary) {
            const increase = empl.salary * percent / 100;
            empl.salary += increase;
        }
    })
}
/****************************************************** */
/********************************************************* */
function displayEmployees(employees) {
    employees.forEach(empl => console.log(empl));
}
console.log("**********************************************")
console.log("Create Random Employees: ")
const nEmployees = 5;
const idDigits = 1;
const minBirthYear = 1950;
const maxBirthYear = 2004;
const minSalary = 10000;
const maxSalary = 40000;
console.log(`${nEmployees} random employees with id's comprising of ${idDigits} salary in range [${minSalary},${maxSalary}], birth years in range [${minBirthYear}, ${maxBirthYear}] `);
let employees = createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary,
    minBirthYear, maxBirthYear);
displayEmployees(employees);
/********************************************************************* */   
console.log("**********************************************")
console.log("employees for following tests are");
employees = [
    createEmployee(123, "Sara", 1990, 12500),
    createEmployee(124, "Sara", 2000, 20000),
    createEmployee(125, "Sara", 2000, 12000),
    createEmployee(126, "Sara", 1980, 25000),
    createEmployee(127, "Sara", 1990, 20000),
]
displayEmployees(employees)

console.log(`average age is ${getAverageAge(employees)}`)
const salaryFrom = 12000; 
const salaryTo = 20000;
console.log(`employees having salary in the range [${salaryFrom}, ${salaryTo}]`);
displayEmployees(getEmployeesBySalary(employees, salaryFrom, salaryTo));
const borderSalary = 13000;
const percent = 10;
console.log(`employees after increasing salary on ${percent} percents for those who have salary less than ${borderSalary}`);
increaseSalary(employees, borderSalary, percent);
displayEmployees(employees);

