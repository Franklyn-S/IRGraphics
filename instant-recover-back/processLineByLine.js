const fs = require("fs");
const readline = require("readline");

async function processLineByLine(filePath="teste.conf") {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lines = []
  for await (const line of rl) {
    if (line !== "") {
      if (!line.startsWith("//")) {
        lines.push(line)
      }      
    }
  }
  console.log(lines);
}

module.exports = processLineByLine;
