const fs = require("fs");
const readable = fs.createReadStream("./bigdata.txt");


readable.on("open", () => {
  console.log("File is open");
})

readable.on("data", (chunk) => {
  console.log(chunk.toString())
})

readable.on("readable", () => {
  let chunk;
  while(null !== (chunk = readable.read())) {
    console.log(chunk.toString());
  }
});

readable.on("end", () => {
  console.log("End of file reached");
})

readable.on("error", (err) => {
  console.log("Error: ", err);
})



readable.on("close", () => {
  console.log("File is closed");
})