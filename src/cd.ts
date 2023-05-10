import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/", (req, res) => {
  res.send("Use route /help");
});

router.get("/help", (req, res) => {
  const data = fs.readFileSync("./files/cd/help.txt", "utf8");
  res.send(data);
});

router.get("/lexical", (req, res) => {
  const data = fs.readFileSync("./files/cd/lexical.c", "utf8");
  res.send(data);
});

router.get("/ff", (req, res) => {
  const data = fs.readFileSync("./files/cd/firstFollow.c", "utf8");
  res.send(data);
});

export default router;
