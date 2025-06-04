import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
