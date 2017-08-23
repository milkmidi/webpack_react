/**
 * generator.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
};
