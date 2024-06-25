const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    console.log("ciaos")
    res.render("index")
})

app.get("/advises", (req,res) => {
    res.render("advises")
});

app.get("/faq", (req,res) => {
    res.render("faq")
});

app.get("/info", (req,res) => {
    res.render("info")
});

app.listen(3000)