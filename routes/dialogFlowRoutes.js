const chatbot = require("../chatbot/chatbot")
const cheerio = require("cheerio");
const request = require("request");

module.exports = app => {
    app.post("/api/df_text_query", async (req,res) => {
        let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.parameters)
          res.send(responses[0].queryResult)
    });
    
    app.post("/api/df_event_query", async (req,res) => {
        let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.parameters)
          res.send(responses[0].queryResult)
    })

    app.post('/getItemData', (req,res) => {
      const item = req.body.item;
      var results = [];
      let url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR12.TRC2.A0.H0.Xhats.TRS0&_nkw="+item+"&_sacat=0"
          request.get(url, function (err, response, body) {
            var $ = cheerio.load(body);
            $("li.s-item").each(function (i, element) {
              var a = $(element).children().eq(0).children().eq(0).children().eq(0).children().eq(0).attr("href");
              var img = $(element).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(1).attr("src");
              var title = $(element).children().eq(0).children().eq(1).children().eq(1).children().eq(0).text();
              var price= $(element).children().eq(0).children().eq(1).children().eq(3).children().eq(0).children().eq(0).text();
              var item = {a, img, title, price}
                results.push(item)
            });
            console.log(results);
            res.send(results)
        });

    });
};
