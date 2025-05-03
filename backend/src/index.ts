import express, { Request, Response } from "express";
const app = express();
import routes from "./routes/index";
import init from "./init";

app.use(express.json());

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("COCA COLA");
});

const PORT = 5555;

const startServer = async () => {

  await init();

  // Запуск сервера
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer()
