
const url = require('url');

module.exports.api = function(req, res){

  if(req.url === '/'){
   res.writeHead(200);
   res.write("Hiii");
   res.end();
 }
 else if(req.url === '/quote' && req.method === "POST"){
   res.writeHead(200);
   res.write("Post Quote");
   res.end();
 }
};
