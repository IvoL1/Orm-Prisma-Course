import questionsController from "@/controllers/questions-controller";
import { Router } from "express";

export const questionsRoutes = Router();

questionsRoutes.get("/", questionsController.index);
questionsRoutes.post("/", questionsController.create);
questionsRoutes.put("/:id", questionsController.update);
questionsRoutes.delete("/:id", questionsController.remove);
