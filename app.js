const express = require("express");
const app = express();




//server
app.listen(3000)

app.get("/info", (req, res) => {
    console.log('aaaaa');

    res.send({message: "ok"})
})


