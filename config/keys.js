if (process.env.NODE_ENV === "production"){
    module.exports = require("./prod");
    console.log(process.env.GOOGLE_PRIVATE_KEY)
    console.log(process.env.GOOGLE_PROJECT_ID)
    console.log(process.env.DIALOGFLOW_SESSION_ID)
    console.log(process.env.DIALOGFLOW_LANGUAGE_CODE)
    console.log(process.env.GOOGLE_CLIENT_EMAIL)
} else {
    module.exports = require("./dev");
}