const fs = require("fs");
const stream = fs.createReadStream("./bigdata.txt");
const writer = fs.createWriteStream("./output.txt");

stream.pause();

setTimeout(() => {
  stream.resume();
}, 2000);

stream.on("data", (chunk) => {
  console.log(chunk.toString());
});

stream.pause();

console.log(stream.isPaused());