/*
 * Title: Not Found Handler
 * Description : 404 Not Found Handler
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// Applications routes

// module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(404, {
    message: '404 Page Not Found',
  });
};

module.exports = handler;
