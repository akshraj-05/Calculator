const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    res.send("the sum of the num1 and num2 is -> "+(num1+num2));
});

app.listen(3007, function () {
    console.log("server started in 3007");
});