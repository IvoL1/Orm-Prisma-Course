import { Router } from "express";
import { questionsRoutes } from "./questions-routes";
import { usersRoutes } from "./users-routes";

export const routes = Router();

routes.use("/questions", questionsRoutes);
routes.use("/users", usersRoutes);
