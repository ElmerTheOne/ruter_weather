const express = require('express');
const http = require('http');
const app = express();
const port = 3000;


app.get('/', (req, res) => res.sendfile('public/index.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () =>  {
      let b = JSON.parse(body);
      console.log(b);
      res.end('ok');
    });
  }
  //console.log(req);
  res.write("heyo"); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
