const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())
require("./routes/dialogFlowRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};


app.listen(PORT, () => {
    console.log("Listening on Port: " + PORT)
});