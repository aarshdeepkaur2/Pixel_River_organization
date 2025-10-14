import employeesJson from "../assets/employees.json";

// Defining the type of data
type Employees = {
  [department: string]: string[];
}; 

let employees: Employees = { ...employeesJson };

// Bsic CRUD operation
export function getEmployees(): Employees {
  return employees;
}

export function addEmployee(department: string, name: string): Employees {
  if (!employees[department]) employees[department] = [];
  employees[department].push(name);
  return employees;
}

export function deleteEmployee(department: string, name: string): Employees {
  if (!employees[department]) return employees;
  employees[department] = employees[department].filter((n) => n !== name);
  return employees;
}
