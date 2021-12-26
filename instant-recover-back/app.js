const fs = require("fs");
const path = require("path");
const rootDirectory = require("./utils/path");

const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/update-config", (req, res, next) => {
  const filePath = path.join(rootDirectory, "data", "test.conf");
  const configs = req.body;
  const keys = Object.keys(configs);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Não foi possível salvar as alterações.");
  }
  const file = fs.createWriteStream(filePath);
  file.on("error", (err) => {
    console.log(err);
    res.status(500).send("Erro! As alterações não foram salvas.");
  });
  keys.forEach((key) => {
    const value =
      typeof configs[key] === "string" ? `"${configs[key]}"` : configs[key];
    if (value !== "") {
      file.write(`${key} = ${value};\n`);
    }
  });
  file.end();

  res.status(200).send("Configurações atualizadas!");
});

app.listen(5000);
