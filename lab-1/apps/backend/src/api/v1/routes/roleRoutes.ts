import { Router } from "express";
import { roleController } from "../controllers/roleController";

const router = Router();
router.get("/", roleController.getAll);
router.get("/:id/employees", roleController.getRoleWithEmployees);

export default router;
