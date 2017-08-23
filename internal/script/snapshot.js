const fs = require('fs');

const isHTMLFile = file => /\.html$/.test(file);

const doCreateFolder = (file) => {
  const dirName = file.split('.')[0];
  if (dirName !== '200' && dirName !== 'index') {
    fs.mkdirSync(`build/${dirName}`);
    fs.renameSync(`build/${file}`, `build/${dirName}/index.html`);
  }
  return file;
};

Promise.resolve()
  .then(() => fs.readdirSync(`${__dirname}/build`))
  .then(files => files.filter(isHTMLFile))
  .then(files => files.map(doCreateFolder))
  .then(() => console.log('complete')); // eslint-disable-line
