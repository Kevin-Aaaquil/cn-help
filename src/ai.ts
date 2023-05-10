import {Router} from "express";
import fs from 'fs';

const router = Router();

router.get("/help", (req, res) => {
    const data = fs.readFileSync("./files/ai/help.txt", "utf8");
    res.send(data);
});

router.get("/han", (req, res) => {
    const data = fs.readFileSync("./files/ai/hanoi.py", "utf8");
    res.send(data);
})

router.get("/gc", (req, res) => {
    const data = fs.readFileSync("./files/ai/graphColor.py", "utf8");
    res.send(data);
})

router.get("/nq", (req, res) => {
    const data = fs.readFileSync("./files/ai/nQueens.py", "utf8");
    res.send(data);
});

router.get("/bfs-jug", (req, res) => {
    const data = fs.readFileSync("./files/ai/bfs-jug.py", "utf8");
    res.send(data);
});

router.get("/dfs-jug", (req, res) => {
    const data = fs.readFileSync("./files/ai/dfs-jug.py", "utf8");
    res.send(data);
});

router.get("/bestfs", (req, res) => {
    const data = fs.readFileSync("./files/ai/bestfs.py", "utf8");
    res.send(data);
});

router.get("/astar", (req, res) => {
    const data = fs.readFileSync("./files/ai/astar.py", "utf8");
    res.send(data);
})

router.get("/fuzzy", (req, res) => {
    const data = fs.readFileSync("./files/ai/fuzzy.py", "utf8");
    res.send(data);
});
export default router;