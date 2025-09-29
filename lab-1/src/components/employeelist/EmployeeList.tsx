import { useState } from "react";
import employees from "../../assets/employees.json";
import "./EmployeeList.css";

function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = Object.entries(employees).filter(
    ([dept, names]) =>
      dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      names.some((name) => name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="directory">
      <h2>Employee Directory</h2>
      <input
        placeholder="Search using name or department"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredEmployees.map(([dept, names]) => (
        <div key={dept} className="department">
          <h4>{dept}</h4>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default EmployeeList;
