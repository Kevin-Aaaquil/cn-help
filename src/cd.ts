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
  const data = fs.readFileSync("./files/cd/lexical.cpp", "utf8");
  res.send(data);
});

router.get("/ff", (req, res) => {
  const data = fs.readFileSync("./files/cd/firstFollow.cpp", "utf8");
  res.send(data);
});

router.get("/tac", (req, res) => {
  const data = fs.readFileSync("./files/cd/3address.cpp", "utf8");
  res.send(data);
});

router.get("/am", (req, res) => {
  const data = fs.readFileSync("./files/cd/ambiguity.cpp", "utf8");
  res.send(data);
});

router.get("/lt", (req, res) => {
  const data = fs.readFileSync("./files/cd/leading.cpp", "utf8");
  res.send(data);
});

router.get("/lf", (req, res) => {
  const data = fs.readFileSync("./files/cd/lf.cpp", "utf8");
  res.send(data);
});

router.get("/lr", (req, res) => {
  const data = fs.readFileSync("./files/cd/lr.cpp", "utf8");
  res.send(data);
});

router.get("/lr0", (req, res) => {
  const data = fs.readFileSync("./files/cd/lr0.cpp", "utf8");
  res.send(data);
});

router.get("/nfa2dfa", (req, res) => {
  const data = fs.readFileSync("./files/cd/nfa2dfa.cpp", "utf8");
  res.send(data);
});

router.get("/predictive", (req, res) => {
  const data = fs.readFileSync("./files/cd/predictive.cpp", "utf8");
  res.send(data);
});

router.get("/re2nfa", (req, res) => {
  const data = fs.readFileSync("./files/cd/re2nfa.cpp", "utf8");
  res.send(data);
});

router.get("/sr", (req, res) => {
  const data = fs.readFileSync("./files/cd/shift.cpp", "utf8");
  res.send(data);
});

router.get("/dag", (req, res) => {
  const data = fs.readFileSync("./files/cd/dag.cpp", "utf8");
  res.send(data);
});

router.get("/i2p", (req, res) => {
  const data = fs.readFileSync("./files/cd/infix2postfix.cpp", "utf8");
  res.send(data);
});

router.get("/p2p", (req, res) => {
  const data = fs.readFileSync("./files/cd/postfix2prefix.cpp", "utf8");
  res.send(data);
});

router.get("/simp", (req, res) => {
  const data = fs.readFileSync("./files/cd/simpCodeGen.cpp", "utf8");
  res.send(data);
});

export default router;
