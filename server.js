const express = require("express");
const bodyparser = require('body-parser');
const PORT = 5000
const router = require("./routes/Users/users.route");

const app = express();
app.use(bodyparser.json())
app.use(router);


app.listen(PORT, ()=> {console.log(`app is running at localhost:${PORT}`)})
