import { PrismaClient } from "../../../../generated/prisma";
const prisma = new PrismaClient();


export const employeeService = {
  getAll: async () => {
    return prisma.employee.findMany({
      include: { role: true },
    });
  },
  
  getEmployeeById: (id: string) =>
    prisma.employee.findUnique({
      where: { id },
      include: { role: true },
    }),


};