import { Request, Response } from "express";
import { prisma } from "../prisma";

class QuestionsController {
  async index(req: Request, res: Response) {
    const questions = await prisma.question.findMany({
      where: {
        title: {
          contains: req.query.title?.toString().trim(),
          mode: "insensitive",
        },
        content: {
          contains: req.query.content?.toString().trim(),
          mode: "insensitive",
        },
      },
    });
    res.json(questions);
  }

  async create(req: Request, res: Response) {
    const { title, content, userId } = req.body;
    await prisma.question.create({ data: { title, content, userId } });
    res.status(201).json({ message: "Question created" });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, content } = req.body;

    await prisma.question.update({
      data: {
        title,
        content,
      },
      where: { id },
    });
    res.json({ message: "question updated!" });
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    await prisma.question.delete({
      where: { id },
    });
    res.json({ message: "Question deleted!" });
  }
}

export default new QuestionsController();
