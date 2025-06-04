import usersController from "@/controllers/users-controller";
import { Router } from "express";

export const usersRoutes = Router();

usersRoutes.get("/", usersController.index);
usersRoutes.post("/", usersController.create);
usersRoutes.get("/:id", usersController.show);
