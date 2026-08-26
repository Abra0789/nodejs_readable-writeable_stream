const fs = require("fs");
const stream = fs.createReadStream("./bigdata.txt");
const writer = fs.createWriteStream("./output.txt");

stream.pipe(writer);

setTimeout(() => {
  stream.unpipe(writer);
  console.log("Stream has been unpiped");
}, 1000);