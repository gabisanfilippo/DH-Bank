const express = require('express');

const usersRoutes = require("../routes/usersRouter")

const app = express();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.use("/", usersRoutes);

app.listen(3000, console.log("a Mãe Ta On!"));