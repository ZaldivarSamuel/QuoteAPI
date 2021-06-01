const https = require('https');
const fs = require('fs');
const api = require('./api.js');

const PORT = 3000;
const HOSTNAME = 'localhost';

const options = {
  key: fs.readFileSync('./certificates/key.pem'),
  cert: fs.readFileSync('./certificates/cert.pem')
};


https.createServer(options, api.api).listen(PORT, () => {
  console.log("Quote API server started on port: " + PORT);
})
