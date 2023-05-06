import express from "express";
import cors from "cors";
import fs from "fs";

(async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

  app.get("/help", (req, res) => {
    const data = fs.readFileSync("./files/help.txt", "utf8");
    res.send(data);
  });

  app.get("/lexical", (req, res) => {
    const data = fs.readFileSync("./files/lexical.c", "utf8");
    res.send(data);
  });

  app.get("/ff", (req, res) => {
    const data = fs.readFileSync("./files/firstFollow.c", "utf8");
    res.send(data);
  });



  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Server started on port :" + port);
  });
})();
