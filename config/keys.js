if (process.env.NODE_ENV === "production"){
    module.exports = require("./prod");
    console.log("We are on Heroku now!")
} else {
    module.exports = require("./dev");
    console.log("We are on local now!")
}