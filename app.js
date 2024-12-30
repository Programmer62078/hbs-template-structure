const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/template/views"));
hbs.registerPartials(path.join(__dirname, "/template/partial"));

app.get("/", (_, res) => {
  res.render("index.hbs", {
    tittle: "Home",
    message: "Hello there!",
    notes: "Please improve",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log(__dirname);
