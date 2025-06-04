import { Request, Response } from "express";
import { prisma } from "@/prisma";

class UsersController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    res.json(users);
  }
  async create(req: Request, res: Response) {
    const { email, name } = req.body;
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({ message: "User created" });
  }
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id } });
    res.json(user);
  }
}

export default new UsersController();
