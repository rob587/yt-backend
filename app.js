const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  console.log("ciao");
});

app.listen(port, () => {
  console.log("benvenuto");
});
