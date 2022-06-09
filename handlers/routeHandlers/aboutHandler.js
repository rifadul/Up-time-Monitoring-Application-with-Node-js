/*
 * Title: About Handler
 * Description : About Page Handler
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// Applications routes

// module scaffolding

const handler = {};

handler.aboutHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: 'About Page',
  });
};

module.exports = handler;
