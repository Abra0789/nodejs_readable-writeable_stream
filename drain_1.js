const fs = require("fs");  

const writer = fs.createWriteStream("outputdrain_1.txt");

const ok = writer.write("A".repeat(10000000));

if (!ok) {
  console.log("Buffer Full");
  
}

writer.on("drain",()=>{
  console.log("continue Writing");
  
});