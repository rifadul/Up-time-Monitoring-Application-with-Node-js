/*
 * Title: Uptime Monitoring Application
 * Description : A RestFul API to monitor up or down time of user defined links
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// dependencies
const http = require('http');
const environmentToExport = require('./helpers/environments');
const { handelServerReqRes } = require('./helpers/handelServerReqRes');
const data = require('./lib/data');
// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// testing the new file system
// create data
// data.create('media', 'user info', { name: 'Siam', language: 'Bangla' }, (err) => {
//   console.log('error was ', err);
// });

// read data
// data.read('media', 'user info', (err, result) => {
//   console.log(err, result);
// });

// update data
// data.update(
//   'media',
//   'user info',
//   { name: 'Rifadul', Language: 'Hindi' },
//   (err) => {
//     console.log(err);
//   }
// );

// deleting data
// data.delete('media', 'user info', (err) => {
//   console.log(err);
// });

// Create server
app.createServer = () => {
  const server = http.createServer(app.handelServerReqRes);
  server.listen(environmentToExport.port, () => {
    console.log(`listening to port ${environmentToExport.port}`);
  });
};

// Handel Server Request Response
app.handelServerReqRes = handelServerReqRes;

// Start Server
app.createServer();
