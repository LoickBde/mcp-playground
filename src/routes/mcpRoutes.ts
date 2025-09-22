import { Router, Request, Response } from "express";
import * as mcpController from "../controllers/mcpController";

const router = Router();

router.post("/", mcpController.entry);

export default router;
