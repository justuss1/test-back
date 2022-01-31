const express = require("express");

const app = express();


app.listen(3000, () => console.log("The server is running"))

app.get("/", (req, res) => {
    console.log('OK');
    //res.send("OK")
})
