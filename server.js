const https = require('https');
const fs = require('fs');

const PORT = 3000;

const options = {
  key: fs.readFileSync('./certificates/key.pem'),
  cert: fs.readFileSync('./certificates/cert.pem')
};

var api = function(req, res){

  if(req.url === '/'){
    res.writeHead(200);
    res.write("Hiii");
    res.end();
  }
}

https.createServer(options, api).listen(PORT, () => {
  console.log("Quote API server started on port: " + PORT);
})
