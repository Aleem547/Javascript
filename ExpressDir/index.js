const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("this is basic response");
//     res.send({
//         name:"apple",
//         color:"red",
//     });
// });

app.get("/", (req, res) => {
    res.send("app is contacted path");
});

app.get("/apple", (req, res) => {
    res.send("app is contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("app contacted orange path");
});

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });

app.post("/", (req, res) => {
    res.send("You send a post request to root");
});

app.get("/",(req,res)=>{
    res.send("hello, i am root");
});

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let htmlStr=`<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
}); 

app.get("/search",(req,res)=>{
    let{q} =(req.query);
    res.send(`search result for query:${q}`);
});