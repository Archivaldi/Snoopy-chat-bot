if (process.env.NODE_ENV === "production"){
    module.exports = require("./prod");
    console.log(process.env.GOOGLE_PRIVATE_KEY)
} else {
    module.exports = require("./dev");
}