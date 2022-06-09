/*
 * Title: Handel Server Request and Response
 * Description : Handel Server Request and Response
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// handler object - module scaffolding
const handler = {};

// Handel Server Request Response
handler.handelServerReqRes = (req, res) => {
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
    console.log(path);
    res.end(realData);
  });
};

//   Export the module
module.exports = handler;
