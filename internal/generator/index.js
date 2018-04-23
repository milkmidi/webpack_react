/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component');
const containerGenerator = require('./container');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
};
