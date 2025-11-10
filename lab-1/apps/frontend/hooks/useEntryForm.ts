import { useState } from "react";
import * as  validStaffService  from "../services/validStaffSerive";
import * as employeeRepo  from "../apis/employeeRepo";
import * as  roleRepo  from "../apis/roleRepo";

export function useEntryForm(type: "employee" | "role") {
  const [form, setForm] = useState({ name: "", dept: "", title: "", person: "", desc: "" });
  const [errors, setErrors] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

   const Change = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    setSuccess(null);

    if (type === "employee") {
      const { valid, error } = validStaffService.validateEmployeeName(form.name);
      if (!valid) {
        setErrors(error);
        return;
      }
      employeeRepo.addEmployee(form.dept, form.name);
      setSuccess("New Employee has been added successfully!");
    }

    let nextId = 1;

    if (type === "role") {
      const nameCheck = validStaffService.validateEmployeeName(form.person);
      const roleCheck = validStaffService.validateRole(form.title, form.person);
      if (!nameCheck.valid) {
        setErrors(nameCheck.error);
        return;
      }
      if (!roleCheck.valid) {
        setErrors(roleCheck.error);
        return;
      }
      roleRepo.addRole({
        id: nextId++,
        title: form.title,
        person: form.person,
        description: form.desc,
      });
      setSuccess("New Role has been added successfully!");
    }

  };

  return {
     form,
     Change,
     Submit,
     errors,
     success };
}
