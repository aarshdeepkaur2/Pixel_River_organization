import { PrismaClient } from "../../../../generated/prisma";
const prisma = new PrismaClient();

export const roleService = {
  getAll: () => prisma.role.findMany(),
  getRoleWithEmployees: (id: string) =>
    prisma.role.findUnique({ where: { id }, include: { employees: true } }),
};
