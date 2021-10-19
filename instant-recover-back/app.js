const express = require("express");

const processLineByLine = require("./processLineByLine");

const app = express();

app.use("/", (req, res, next) => {
  console.log("teste");
  processLineByLine();
});

app.listen(5000);
