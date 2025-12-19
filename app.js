import express from "express";
import gamesRouter from "./routers/games.js";
import gameArray from "./post.js"

const app = express();
const port = 3000;

app.get("/", (req, resp) =>{
    resp.json(gameArray)
});

app.use(express.static("public"));
app.use(express.json());

app.use("/games", gamesRouter);

app.listen(port, function(){
    console.log("Il server sta ascoltando sulla porta " + port)
});