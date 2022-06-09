/*
 * Title: Uptime Monitoring Application
 * Description : A RestFul API to monitor up or down time of user defined links
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// Create server
app.createServer = () => {
  const server = http.createServer(app.handelServerReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// Handel Server Request Response
app.handelServerReqRes = (req, res) => {
  // response handel
  //   get url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;
  const decoder = new StringDecoder('utf-8');
  let realData = '';
  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on('end', () => {
    realData += decoder.end();
    console.log(realData);
    res.end(realData);
  });
};

// Start Server
app.createServer();
