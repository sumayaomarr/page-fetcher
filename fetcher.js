const request = require('request');
const fs = require('fs');
//Fetches info inputted into terminal
const arg = process.argv

const website = arg[2]

const fileName = arg[3]

request(website, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  if (!error){ 
// wiriting body
    fs.writeFile(fileName, body, 'utf8', (error) => {
      const stat = fs.statSync(fileName)
      console.log(`Downloaded and saved ${stat.size} bytes to ${fileName}`)
    });
  }
}); 