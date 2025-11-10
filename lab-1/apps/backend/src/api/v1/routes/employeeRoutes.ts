import express from "express";
import { employeeController } from "../controllers/employeeController";
const router = express.Router();

router.get("/", employeeController.getAll);
router.get("/:id", employeeController.getEmployeeById)

export default router;
