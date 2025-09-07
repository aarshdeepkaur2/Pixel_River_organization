import employees from "../../assets/employees.json";
import "./Employeelist.css";

function EmployeeList() {
  return (
    <section className="directory">
      <h2>Employee Directory</h2>

      {Object.entries(employees).map(([dept, names]) => (
        <div key={dept} className="department">
          <h4>{dept}</h4>
          <ul>
            {(names as string[]).map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default EmployeeList;


