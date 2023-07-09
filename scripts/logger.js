const fs = require('fs');
const d = new Date();
const filePath = "log.txt";
const content = `Time: ${d.toLocaleString()}\n`;

fs.appendFile(filePath, content, (err) => {
  if(err) {
    console.error(err);
  }
  //successful
});
