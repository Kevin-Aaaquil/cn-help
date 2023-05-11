import express from "express";
import cors from "cors";
import fs from "fs";
import cdRouter from "./cd";
import aiRouter from "./ai";
import cnRouter from "./cn";

(async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Use route /help");
  });

  app.get("/help", (req, res) => {
    const data = fs.readFileSync("./files/help.txt", "utf8");
    res.send(data);
  });

  app.use("/cd", cdRouter);
  app.use("/ai", aiRouter);
  app.use("/cn", cnRouter);

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Server started on port :" + port);
  });
})();
