/*
 * Title: Applications Routes
 * Description : Applications Routes
 * Author : Siam Khushnobish
 * Date : 09/06/2022
 */

// Applications routes

// dependencies

const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { aboutHandler } = require('./handlers/routeHandlers/aboutHandler');

const routes = {
  sample: sampleHandler,
  about: aboutHandler,
};

module.exports = routes;
