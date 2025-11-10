import { NextFunction, Request, Response } from "express";
import { employeeService } from "../services/employeeService";
import { successResponse } from "../models/responseModel";

export const employeeController = {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const employees = await employeeService.getAll();
      res.status(200).json(
        successResponse(employees, "Employees retrieved successfully")
      );
    } catch (error) {
      next(error);
    }
  },

  async getEmployeeById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const employee = await employeeService.getEmployeeById(id);

      if (!employee) {
        res.status(404).json({ message: "Employee not found" });
        return;
      }

      res.status(200).json(
        successResponse(employee, "Employee retrieved successfully")
      );
    } catch (error) {
      next(error);
    }
  },
};
