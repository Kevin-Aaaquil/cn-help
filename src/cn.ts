import { Router } from "express";
import fs from 'fs';


const router = Router();


router.get('/help', (req,res)=>{
    const data = fs.readFileSync("./files/cn/help.txt", "utf8");
    res.send(data);
})

router.get('/cscc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/cscomm-client.java", "utf8");
    res.send(data);
})

router.get('/cscs', (req,res)=>{
    const data = fs.readFileSync("./files/cn/cscomm-server.java", "utf8");
    res.send(data);
})

router.get('/pingc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/ping-client.java", "utf8");
    res.send(data);
})

router.get('/pings', (req,res)=>{
    const data = fs.readFileSync("./files/cn/ping-server.java", "utf8");
    res.send(data);
})

router.get('/webc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/webup-client.java", "utf8");
    res.send(data);
})

router.get('/webs', (req,res)=>{
    const data = fs.readFileSync("./files/cn/webup-server.java", "utf8");
    res.send(data);
})

router.get('/crc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/crc.java", "utf8");
    res.send(data);
})

router.get('/swc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/stopWait-client.java", "utf8");
    res.send(data);
})

router.get('/sws', (req,res)=>{
    const data = fs.readFileSync("./files/cn/stopWait-server.java", "utf8");
    res.send(data);
})

router.get('/slidingc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/sliding-client.java", "utf8");
    res.send(data);
})

router.get('/slidings', (req,res)=>{
    const data = fs.readFileSync("./files/cn/sliding-server.java", "utf8");
    res.send(data);
})

router.get('/arpc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/arp-client.java", "utf8");
    res.send(data);
})

router.get('/arps', (req,res)=>{
    const data = fs.readFileSync("./files/cn/arp-server.java", "utf8");
    res.send(data);
})

router.get('/rarpc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/rarp-client.java", "utf8");
    res.send(data);
})

router.get('/rarps', (req,res)=>{
    const data = fs.readFileSync("./files/cn/rarp-server.java", "utf8");
    res.send(data);
})

router.get('/tcpc', (req,res)=>{
    const data = fs.readFileSync("./files/cn/tcp-client.java", "utf8");
    res.send(data);
})

router.get('/tcps', (req,res)=>{
    const data = fs.readFileSync("./files/cn/tcp-server.java", "utf8");
    res.send(data);
})
export default router;