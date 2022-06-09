/*
 * Title: Uptime Monitoring Application
 * Description : A RestFul API to monitor up or down time of user defined links
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// dependencies
const http = require('http');
const { handelServerReqRes } = require('./helpers/handelServerReqRes');
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
app.handelServerReqRes = handelServerReqRes;

// Start Server
app.createServer();
