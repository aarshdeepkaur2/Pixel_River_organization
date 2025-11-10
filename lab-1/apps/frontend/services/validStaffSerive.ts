import { getRoles } from "../apis/roleRepo";


export function validateEmployeeName(name: string) {
  if (!name || name.trim().length < 3) {
    return { valid: false, error: " Name of the Employee should be 3 character long." };
  }
  return { valid: true, error: "" };
}

export function validateRole(title: string, person: string) {
  if (!title || title.trim().length < 3) {
    return { valid: false, error: "The role title should be 3 character long." };
  }

  if (!person || person.trim().length < 3) {
    return { valid: false, error: "The name of the Person should be 3 character long." };
  }

  const roles = getRoles();
  const isDuplicate = roles.some(
    (r) => r.title.toLowerCase() === title.toLowerCase()
  );

  if (isDuplicate) {
    return { valid: false, error: "The entered role title already exists." };
  }

  return { valid: true, error: "" };
}
