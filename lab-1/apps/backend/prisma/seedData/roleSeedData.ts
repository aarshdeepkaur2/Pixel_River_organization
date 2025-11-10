import { Role } from "@prisma/client";

export const rolesSeedData: Omit<Role, "id">[] = [
  {
    title: "Manager",
    person: "Alice Johnson",
    description: "Oversees daily operations and manages the team."
  },
  {
    title: "Developer",
    person: "Bob Smith",
    description: "Responsible for designing and implementing software systems."
  },
  {
    title: "Accountant",
    person: "Catherine Jones",
    description: "Manages company finances and payroll."
  }
];
