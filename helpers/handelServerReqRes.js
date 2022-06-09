/*
 * Title: Handel Server Request and Response
 * Description : Handel Server Request and Response
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const {
  notFoundHandler,
} = require('../handlers/routeHandlers/notFoundHandler');

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

  const requestProperties = {
    parseUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on('end', () => {
    realData += decoder.end();
    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === 'number' ? statusCode : 500;
      payload = typeof payload === 'object' ? payload : {};
      const payloadString = JSON.stringify(payload);
      res.writeHead(statusCode);
      res.end(payloadString);
    });
    res.end(realData);
  });
};

//   Export the module
module.exports = handler;
