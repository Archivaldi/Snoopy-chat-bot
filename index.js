const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.json({"hello": "there!"})
})

app.listen(5000);