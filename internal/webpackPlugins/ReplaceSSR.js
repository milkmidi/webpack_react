/* eslint func-names:0, no-param-reassign: 0, no-console: 0 */
const fs = require('fs');
const path = require('path');

const replaceRenderToStringToHTML = (templateHTML, fileName) => {
  const renderStr = fs.readFileSync(fileName, 'utf8');
  const html = templateHTML.replace('<div id="root"></div>', `<div id="root">${renderStr}</div>`);
  fs.writeFile(fileName, html, (err) => {
    if (err) throw err;
  });
};
const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    if (file !== 'asset') {
      filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));
    }
  });
  return filelist;
};


function ReplaceSSR(options = {}) {
  this.options = options;
}

ReplaceSSR.prototype.apply = function (compiler) {
  compiler.plugin('done', () => {
    const buildPath = path.resolve('build');
    const templatePath = path.join(buildPath, '200.html');
    const templateHTML = fs.readFileSync(templatePath, 'utf8');
    Promise.resolve()
      .then(() => walkSync(buildPath))
      .then(paths => paths.filter(p => /index\.html$/.test(p)))
      .then(paths => paths.forEach((p) => {
        replaceRenderToStringToHTML(templateHTML, p);
      }))
      .then(() => fs.unlinkSync(templatePath))
      .then(() => console.log('-- react prerender complete --'));
  });
};

module.exports = ReplaceSSR;
