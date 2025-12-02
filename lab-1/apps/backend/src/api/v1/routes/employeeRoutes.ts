import express from "express";
import { employeeController } from "../controllers/employeeController";
import { requireAuth } from "@clerk/express";
const router = express.Router();

router.get("/", requireAuth(),employeeController.getAll);
router.get("/:id", requireAuth(), employeeController.getEmployeeById)

export default router;
