import express from "express";
import { NextFunction, Request, Response } from "express";
import route from "./routes/route";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", route);

// Middleware para lidar com rotas não encontradas
function handleNotFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(404).json({ message: "ROUTE NOT FOUND" });
}

app.get("/users", (request: Request, response: Response) => {
  return response.json({ message: "Fazendo a primeira frase" });
});

// Montando o middleware handleNotFound após todas as rotas
app.use(handleNotFound);

app.listen(process.env.PORT, () => {
  console.log("running server");
});
