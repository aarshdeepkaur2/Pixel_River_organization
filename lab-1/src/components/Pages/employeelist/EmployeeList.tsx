import { useState } from "react";
import * as employeeRepo from "../../../apis/employeeRepo";
import { useEntryForm } from "../../../hooks/useEntryForm";
import "./Employeelist.css";

function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState("");
  const { form, Change, Submit, errors, success } = useEntryForm("employee");
  const employees = employeeRepo.getEmployees();


  const departments = Object.keys(employees);

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
      <form onSubmit={Submit} className="employee-form">
      
        <select
          name="dept"
          value={form.dept}
          onChange={Change}
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <input
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={Change}
          required
        />

        <button type="submit">Add New Employee</button>
      </form>

      {errors && <p className="error">{errors}</p>}
      {success && <p className="success">{success}</p>}

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
