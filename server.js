const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("./routes/dialogFlowRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};

if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"))
    })
  }

app.listen(PORT, () => {
    console.log("Listening on Port: " + PORT)
});