import { PrismaClient } from "../generated/prisma";
// importing from json data 
import roles from "../../frontend/assets/organization.json";
import employeesData from "../../frontend/assets/employees.json";

const prisma = new PrismaClient();

async function main() {

  // Seed Roles
  for (const role of roles) {
    await prisma.role.create({
      data: {
        title: role.title,
        person: role.person,
        description: role.description,
      },
    });
  }

  //Seed Employees
  for (const [department, names] of Object.entries(employeesData)) {
    for (const name of names as string[]) {
      await prisma.employee.create({
        data: {
          name,
          department,
        },
      });
    }
  }

  console.log("Seeding has bean completed Sucessfully!!!");
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
