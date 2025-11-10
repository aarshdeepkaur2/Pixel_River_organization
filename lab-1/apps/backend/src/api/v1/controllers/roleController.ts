import { Request, Response, NextFunction } from "express";
import { roleService } from "../services/roleService";
import { successResponse } from "../models/responseModel";

export const roleController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const roles = await roleService.getAll();
      res.status(200).json(successResponse(roles, "Roles retrieved successfully"));
    } catch (error) {
      next(error);
    }
  },

  async getRoleWithEmployees(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const role = await roleService.getRoleWithEmployees(id);
      res.status(200).json(successResponse(role, "Role and employees data has been retrieved successfully"));
    } catch (error) {
      next(error);
    }
  },
};
