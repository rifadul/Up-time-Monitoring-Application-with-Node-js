/*
 * Title: Environments
 * Description : Environments related variable
 * Author : Siam Khushnobish
 * Date : 11/06/2022
 */

// dependencies

// module scaffolding

const environments = {};

environments.staging = {
  port: 3000,
  envName: 'staging',
};

environments.production = {
  port: 5000,
  envName: 'production',
};

// determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

//   exports corresponding environment object

const environmentToExport =
  typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

// exports module
module.exports = environmentToExport;
