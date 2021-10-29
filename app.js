const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const rotas = require("./routes/routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(methodOverride("_method"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));


app.use(rotas);


app.listen(3000, function() {
  console.log('Caixa Eletrônico sendo executado na porta 3000!');
});