const fs = require("fs");
const stream = fs.createReadStream("./bigdata.txt");

stream.on("readable", () => {
 const chunk = stream.read(5);
  
 console.log("Chunk read: ", chunk.toString());

 stream.unshift(chunk);

 console.log("Chunk after unshift: ", stream.read(6).toString());
});