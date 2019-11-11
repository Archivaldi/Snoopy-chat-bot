module.exports = app => {
    app.post("/api/df_text_query", (req,res) => {
        res.send({'do': "text query"})
    });
    
    app.post("/api/df_event_query", (req,res) => {
        res.send({'do': "event query"})
    })
    
    app.get("/mas", (req,res) => {
        res.send("hi from routes folder")
    })

    app.get("/", (req,res) => {
        res.send({"hello": "there!",
                    "this is " : "nodemon"})
    })
}