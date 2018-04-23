const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(path.join(__dirname, '../../../src/js/component'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../../../src/js/container'));
const components = pageComponents.concat(pageContainers);

const componentExists = comp => components.indexOf(comp) >= 0;

module.exports = {
  componentExists,
};
