/*
 * Title: Sample Handler
 * Description : Sample Handler
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// Applications routes

// module scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: 'This is a smple url',
  });
};

module.exports = handler;
